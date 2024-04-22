const dayjs = require('dayjs')
const orderModel = require('../model/OrderModel')
const orderGoodModel = require('../model/orderGoodModel')
const { confirmOrderValidate } = require('../schema/OrderSchema')
const { v4: uuidv4 } = require('uuid')
const userModel = require('../model/UserModel')
const { Op } = require('sequelize')
orderModel.hasMany(orderGoodModel, { foreignKey: 'order_id' })
orderModel.belongsTo(userModel, { foreignKey: 'user_id' })
//确认订单
const confirmOrder = async (req, res) => {
  //校验前端传递过来的数据
  if (!confirmOrderValidate(req.body)) {
    return res.json({ code: 1001, message: '确认订单的信息有误' })
  }
  const { user_id, create_date, shipping_address, goodList, order_number, address_name, address_number, order_price } = req.body
  try {
    //创建订单
    const result = await orderModel.create({
      order_id: uuidv4(),
      user_id,
      order_status: 1,
      create_date,
      order_status: 1,
      shipping_address,
      order_number,
      address_name,
      address_number,
      order_price: order_price
    })
    //获取订单id
    const { order_id } = result.dataValues

    //将商品存放到orders_goods表，封装好需要的数据
    let orderGoodsArray = goodList.map((item) => {
      return {
        order_good_id: uuidv4(),
        good_id: item.good_id,
        order_id,
        good_name: item.good_name,
        good_image: item.good_image,
        good_number: item.addNum,
        good_price: item.good_price,
        total_price: parseFloat((item.addNum * item.good_price).toFixed(2))
      }
    })
    //将对应的商品存放到order和good关联表
    const result1 = await orderGoodModel.bulkCreate(orderGoodsArray)

    //封装返回需要的数据
    const order = {
      ...result.dataValues,
      create_date: dayjs(result.dataValues.create_date).format('YYYY-MM-DD HH:mm:ss')
    }

    const orderData = {
      ...order,
      goodList
    }

    //返回订单
    return res.json({
      code: 2000,
      message: '订单创建完成',
      data: orderData
    })
  } catch (error) {
    console.log(error)
    return res.json({ code: 2003, message: '数据库创建失败' })
  }
}

const getOrder = async (req, res) => {
  const { order_state, user_id } = req.query
  try {
    //查询全部
    if (order_state === '0') {
      //获取所有订单
      const result = await orderModel.findAll({ where: { user_id }, include: [{ model: orderGoodModel }] })
      if (result.length <= 0) return res.json({ type: 2000, message: '获取订单成功,您还没有有订单', data: [] })
      const dataArr = result.map((item) => item.dataValues)
      return res.json({ code: 2000, message: '获取订单成功', data: dataArr })
    } else {
      const result = await orderModel.findAll({ where: { order_status: Number(order_state), user_id }, include: [{ model: orderGoodModel }] })
      if (result.length <= 0) return res.json({ code: 2000, message: '获取订单成功,您还没有有订单', data: [] })
      const dataArr = result.map((item) => item.dataValues)
      return res.json({ code: 2000, message: '获取订单成功', data: dataArr })
    }
  } catch (error) {
    console.log(error)
  }
  return res.json({ code: 2000, message: '获取订单成功', data: [] })
}

//
const cancelOrder = async (req, res) => {
  if (!req.body.order_id) return res.json({ code: 2001, message: '取消订单失败,没有传递服务订单id' })
  const { order_id, user_id } = req.body
  try {
    await orderModel.update({ order_status: 4 }, { where: { order_id, user_id } })
    return res.json({ code: 2000, message: '取消订单成功' })
  } catch (error) {
    return res.json({ code: 2002, message: '取消订单失败,数据库问题' })
  }
}

const successOrder = async (req, res) => {
  if (!req.body.order_id) return res.json({ code: 2001, message: '取消订单失败,没有传递服务订单id' })
  const { order_id, user_id } = req.body
  try {
    await orderModel.update({ order_status: 5 }, { where: { order_id, user_id } })
    return res.json({ code: 2000, message: '取消订单成功' })
  } catch (error) {
    return res.json({ code: 2002, message: '取消订单失败,数据库问题' })
  }
}

//管理员操作,获取所有订单包括对应的订单商品
const getOrderAndGood = async (req, res) => {
  try {
    const result = await orderModel.findAll({ include: [{ model: userModel }] })
    const orderData = result.map((item) => item.dataValues)
    return res.json({ code: 2000, message: '订单创建完成', data: orderData })
  } catch (error) {
    console.log(error)
    return res.json({ code: 2001, message: '获取订单失败,数据库', data: error })
  }
}
//通过订单编号搜索
const searchOrder = async (req, res) => {
  if (!req.body.search) return res.json({ code: 2003, message: '不能查询为空' })
  try {
    const result = await orderModel.findAll({ where: { order_number: { [Op.like]: `%${req.body.search}%` } } })
    const arr = result.map((item) => item.dataValues)
    return res.json({ code: 2000, message: '获取成功', data: arr })
  } catch (error) {
    console.log(error)
    return res.json({ code: 2001, message: '获取订单失败' })
  }
}

const adminDelOrder = async (req, res) => {
  try {
    // 检查id是否为数组
    const isBatchDelete = Array.isArray(req.body.order_id)
    // 定义删除操作
    let deleteOperation
    deleteOperation = isBatchDelete ? { where: { order_id: { [Op.in]: req.body.order_id } } } : { where: { order_id: req.body.order_id } }
    // 执行删除操作
    const result = await orderModel.destroy(deleteOperation)
    // 根据删除操作的成功与否返回不同的响应
    return result ? res.json({ code: 2000, message: isBatchDelete ? '批量删除成功' : '单个删除成功' }) : res.json({ code: 2001, message: '删除失败' })
  } catch (error) {
    return res.json({ code: 2001, message: '删除失败,需要先删除商品订单所对应的商品,或者数据库查询失败' })
  }
}

const adminSuccessOrder = async (req, res) => {
  try {
    const { order_id } = req.body
    const result = await orderModel.update({ order_status: 4 }, { where: { order_id } })
    return result.length >= 0 ? res.json({ code: 2000, message: '修改成功' }) : res.json({ code: 2004, message: '修改失败' })
  } catch (error) {
    console.log(error)
    return res.json({ code: 2001, message: '获取订单失败' })
  }
}
const adminSearchOrderGood = async (req, res) => {
  try {
    const result = await orderGoodModel.findAll({ where: { order_id: { [Op.like]: `%${req.body.order_id}%` } } })
    const arr = result.map((item) => item.dataValues)
    return res.json({ code: 2000, message: '获取成功', data: arr })
  } catch (error) {
    console.log(error)
    return res.json({ code: 2001, message: '获取订单失败' })
  }
}
module.exports = {
  confirmOrder,
  getOrder,
  cancelOrder,
  successOrder,
  getOrderAndGood,
  searchOrder,
  adminDelOrder,
  adminSuccessOrder,
  adminSearchOrderGood
}
