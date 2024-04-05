const dayjs = require('dayjs')
const now = dayjs().format('YYYY-MM-DD hh:mm:ss')
const adminModel = require('../model/AdminModel.js')
const messageModel = require('../model/MessageModel.js')
const userModel = require('../model/UserModel.js')
const { v4: uuidv4 } = require('uuid')
const { Op } = require('sequelize')
messageModel.belongsTo(userModel, { foreignKey: 'message_user_id' })
messageModel.belongsTo(adminModel, { foreignKey: 'message_admin_id' })

//类型的定义
const ACTION_TYPE = {
  CLIENT_CONNECT: 1,
  CLIENT_GET_HISTORY: 2, //获取历史记录
  CLIENT_MESSAGE: 3,
  ADMIN_CONNECT: 4, //连接类型
  ADMIN_GET_HiSTORY: 5, //获取历史数据类型
  ADMIN_GET_CLIENT: 6, //客户数据类型
  ADMIN_MESSAGE: 7, //管理员发送消息
  CLIENT_EXIT: 8,
  ADMIN_EXIT: 9
}

let auth = {} //记录ws实例的

const WebSocketHandler = async (ws, req) => {
  let admin_id = null //获取管理员id

  try {
    const { dataValues } = await adminModel.findOne({ attributes: ['admin_id'] })
    admin_id = dataValues.admin_id
  } catch (error) {
    console.log(error)
  }

  //监听消息
  ws.on('message', async (msg) => {
    const { type, id, data } = JSON.parse(msg) //获取管理员id

    try {
      //获取历史数据的方法
      async function getHistory() {
        const result = await messageModel.findAll({
          where: {
            message_user_id: id
          },
          include: [
            { model: userModel, attributes: ['user_avatar'] },
            { model: adminModel, attributes: ['admin_avatar'] }
          ]
        })
        //获取数据
        let dataArr = result.map((item) => {
          return item.dataValues
        })
        //排序
        dataArr.sort((a, b) => a.message_order - b.message_order)
        return dataArr
      }

      //获取所有用户的方法
      async function getUsers() {
        const userResult = await userModel.findAll({
          where: {
            user_id: { [Op.in]: [...Object.keys(auth)] }
          },
          attributes: { exclude: ['user_password'] }
        })
        if (userResult.length <= 0) {
          return []
        }
        return userResult.map((item) => item.dataValues)
      }

      //获取用户姓名
      async function getUserName(user_id) {
        const userResult = await userModel.findOne({
          where: {
            user_id
          },
          attributes: ['user_name']
        })
        if (userResult.length <= 0) {
          return '查询不到该用户'
        }

        return userResult.dataValues.user_name
      }
      switch (type) {
        case ACTION_TYPE.CLIENT_CONNECT: //认证用户
          auth[id] = ws
          auth[id].send(JSON.stringify({ type: 1, data: '客户身份认证成功' })) //给客户发送连接成功
          if (auth[admin_id]) {
            const users = await getUsers()
            auth[admin_id].send(JSON.stringify({ type: 6, data: users }))
          }
          break

        case ACTION_TYPE.CLIENT_GET_HISTORY: //用户查询历史聊天记录
          const dataArr = await getHistory()
          auth[id].send(JSON.stringify({ type: 2, data: dataArr }))
          break

        case ACTION_TYPE.CLIENT_MESSAGE: //客户端发送消息，需要向管理员和客户都发送消息
          const count = await messageModel.count()
          //创建聊天记录
          const result1 = await messageModel.create({
            message_id: uuidv4(),
            message_user_id: id,
            message_admin_id: admin_id,
            message: data,
            message_date: now,
            message_type: 1,
            message_order: count + 1
          })
          const dataArr1 = await getHistory()

          auth[id].send(JSON.stringify({ type: 2, data: dataArr1 }))
          //如果客户端在线，直接发送给客户端
          if (auth[admin_id]) {
            auth[admin_id].send(JSON.stringify({ type: 5, data: dataArr1 }))
          }
          break
        case ACTION_TYPE.ADMIN_CONNECT: //管理员认证
          auth[id] = ws

          auth[id].send(JSON.stringify({ type: 4, data: '管理员身份认证成功' }))
          break
        case ACTION_TYPE.ADMIN_GET_HiSTORY: //管理员获取对应的用户历史记录
          const admin_user_history = await getHistory()
          auth[admin_id].send(JSON.stringify({ type: 5, data: admin_user_history }))
          break

        case ACTION_TYPE.ADMIN_GET_CLIENT: //管理员获取用户
          //返回已经连接的用户
          const users = await getUsers()
          auth[id].send(JSON.stringify({ type: 6, data: users }))
          break

        case ACTION_TYPE.ADMIN_MESSAGE: //管理员发送消息
          const count1 = await messageModel.count()
          //创建聊天记录
          const result2 = await messageModel.create({
            message_id: uuidv4(),
            message_user_id: id,
            message_admin_id: admin_id,
            message: data,
            message_date: now,
            message_type: 2,
            message_order: count1 + 1
          })
          const dataArr2 = await getHistory()
          //客户端和管理员都去重新获取消息
          auth[id].send(JSON.stringify({ type: 2, data: dataArr2 }))
          auth[admin_id].send(JSON.stringify({ type: 5, data: dataArr2 }))
          break

        case ACTION_TYPE.CLIENT_EXIT:
          delete auth[id]

          const result3 = await getUserName(id)
          if (auth[admin_id]) auth[admin_id].send(JSON.stringify({ type: 8, data: `${result3}该用户已经退出客服咨询了` }))

        case ACTION_TYPE.ADMIN_EXIT:
          delete auth[id]

          break

        default:
          break
      }
    } catch (error) {
      console.log(error)
    }
  })

  //监听关闭的回调提示管理员用户已经退出客服服务了
  ws.on('close', () => {
    console.log('连接关闭')
  })

  ws.on('error', (error) => {
    console.error('WebSocket 错误:', error)
  })
}

module.exports = {
  WebSocketHandler
}
