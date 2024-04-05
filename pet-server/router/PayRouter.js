const express = require('express')
const router = express.Router()
const { payHandler, paySuccess } = require('../router_handler/PayHandler')
//确认订单
router.post('/pay', payHandler)
router.post('/paySuccess', paySuccess)
//暴漏数据
module.exports = router
