const express = require('express')
const router = express.Router()
const { confirmOrder } = require('../router_handler/OrderHandler')
//确认订单
router.post('/confirmOrder', confirmOrder)

//暴漏数据
module.exports = router
