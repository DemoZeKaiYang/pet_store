const dayjs = require('dayjs')
const orderModel = require('../model/OrderModel')
const orderGoodModel = require('../model/orderGoodModel')
const { confirmOrderValidate } = require('../schema/OrderSchema')
const { v4: uuidv4 } = require('uuid')

orderModel.hasMany(orderGoodModel, { foreignKey: 'order_id' })
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
      console.log(result)
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
    await orderModel.update(
      { order_status: 4 },
      {
        where: {
          order_id,
          user_id
        }
      }
    )
    return res.json({ code: 2000, message: '取消订单成功' })
  } catch (error) {
    return res.json({ code: 2002, message: '取消订单失败,数据库问题' })
  }
}

const successOrder = async (req, res) => {
  if (!req.body.order_id) return res.json({ code: 2001, message: '取消订单失败,没有传递服务订单id' })
  const { order_id, user_id } = req.body
  try {
    await orderModel.update(
      { order_status: 5 },
      {
        where: {
          order_id,
          user_id
        }
      }
    )
    return res.json({ code: 2000, message: '取消订单成功' })
  } catch (error) {
    return res.json({ code: 2002, message: '取消订单失败,数据库问题' })
  }
}

module.exports = {
  confirmOrder,
  getOrder,
  cancelOrder,
  successOrder
}
