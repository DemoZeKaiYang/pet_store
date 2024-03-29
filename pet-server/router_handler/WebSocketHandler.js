const dayjs = require('dayjs')
const now = dayjs().format('YYYY-MM-DD hh:mm:ss')
const adminModel = require('../model/AdminModel.js')
const messageModel = require('../model/MessageModel.js')
const userModel = require('../model/UserModel.js')
const { v4: uuidv4 } = require('uuid')
messageModel.belongsTo(userModel, { foreignKey: 'message_user_id' })
messageModel.belongsTo(adminModel, { foreignKey: 'message_admin_id' })

//类型的定义
const ACTION_TYPE = {
  CONNECT: 1, //连接类型
  GET_HISTORY_MESSAGE: 2, //获取历史数据类型
  CLIENT_MESSAGE: 3 //客户数据类型
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
      async function getHistory() {
        const result = await messageModel.findAll({
          where: {
            message_user_id: id,
            message_admin_id: admin_id
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

      switch (type) {
        case ACTION_TYPE.CONNECT: //用户连接，记录身份
          //记录身份
          auth[id] = ws
          //如果是用户认证，发送给用户认证成功
          if (id !== admin_id) auth[id].send(JSON.stringify({ type: 1, data: '身份认证成功' }))

          //如果是管理员。发送认证成功，并且发送连接得客户
          if (id === admin_id) {
            //查询
            await userModel.findAll({ where })
            auth[id].send(JSON.stringify({ type: 1, data: '管理员身份认证成功', clients: [...Object.keys(auth)] }))
          }
          break

        case ACTION_TYPE.GET_HISTORY_MESSAGE: //查询历史聊天记录
          const dataArr = await getHistory()
          auth[id].send(JSON.stringify({ type: 2, data: dataArr }))
          break

        case ACTION_TYPE.CLIENT_MESSAGE:
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
          await result1.increment('message_order')
          const dataArr1 = await getHistory()
          auth[id].send(JSON.stringify({ type: 2, data: dataArr1 }))
          //如果客户端在线，直接发送给客户端
          if (admin_id) {
            auth[admin_id].send(JSON.stringify({ type: 2, data: dataArr1 }))
          }

          break
      }
    } catch (error) {
      console.log(error)
    }
  })

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
