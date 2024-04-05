const serviceModel = require('../model/ServiceModel')
const serviceOrderModel = require('../model/ServiceOrderModel')
const { v4: uuidv4 } = require('uuid')
const dayjs = require('dayjs')

const getService = async (req, res) => {
  if (!req.body.service_type_id) return res.json({ code: 2001, message: '没有传递id' })

  const { service_type_id } = req.body
  try {
    const result = await serviceModel.findAll({
      where: {
        service_type_id
      }
    })
    const arr = result
      .map((item) => {
        return item.dataValues
      })
      .sort((a, b) => a.service_order - b.service_order)
    return res.json({ code: 2000, message: '没有传递id', data: arr })
  } catch (error) {
    return res.json({ code: 2002, message: '数据库错误' })
  }
}
const confirmService = async (req, res) => {
  if (!req.body) return res.json({ code: 2001, message: '没有传递数据' })
  console.log(`output-req.body`, req.body)
  try {
    const result = await serviceOrderModel.create({
      ...req.body,
      service_order_id: uuidv4()
    })
    return res.json({ code: 2000, message: '确认订单成功' })
  } catch (error) {
    return res.json({ code: 2002, message: '确认订单失败,数据库问题' })
  }
}

const getServiceOrder = async (req, res) => {
  if (!req.query.user_id) return res.json({ code: 2001, message: '获取服务订单失败,没有传递用户id问题' })

  try {
    const result = await serviceOrderModel.findAll({ where: { user_id: req.query.user_id } })
    const dataArr = result.map((item) => {
      return {
        ...item.dataValues,
        service_time: dayjs(item.dataValues.service_time).format('YYYY-MM-DD HH:mm:ss')
      }
    })
    return res.json({ code: 2000, message: '获取服务订单成功', data: dataArr })
  } catch (error) {
    return res.json({ code: 2002, message: '获取服务订单失败,数据库问题' })
  }
}

//取消订单

const cancelServiceOrder = async (req, res) => {
  if (!req.body.service_order_id) return res.json({ code: 2001, message: '取消订单失败,没有传递服务订单id' })
  const { service_order_id, user_id } = req.body
  try {
    await serviceOrderModel.update(
      { service_status: 3 },
      {
        where: {
          service_order_id,
          user_id
        }
      }
    )
    return res.json({ code: 2000, message: '取消订单成功' })
  } catch (error) {
    return res.json({ code: 2002, message: '取消订单失败,数据库问题' })
  }
}

const successServiceOrder = async (req, res) => {
  if (!req.body.service_order_id) return res.json({ code: 2001, message: '确认订单失败,没有传递服务订单id' })
  const { service_order_id, user_id } = req.body
  try {
    await serviceOrderModel.update(
      { service_status: 4 },
      {
        where: {
          service_order_id,
          user_id
        }
      }
    )
    return res.json({ code: 2000, message: '确认订单成功' })
  } catch (error) {
    return res.json({ code: 2002, message: '确认订单失败,数据库问题' })
  }
}

module.exports = {
  getService,
  confirmService,
  getServiceOrder,
  cancelServiceOrder,
  successServiceOrder
}
