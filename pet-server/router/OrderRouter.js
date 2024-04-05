const express = require('express')
const router = express.Router()
const { confirmOrder, getOrder, successOrder, cancelOrder } = require('../router_handler/OrderHandler')
//确认订单
router.post('/confirmOrder', confirmOrder)

//获取订单
router.get('/getOrder', getOrder)

//取消订单
router.post('/cancelOrder', cancelOrder)

//确认完成订单
router.post('/successOrder', successOrder)

//暴漏数据
module.exports = router
