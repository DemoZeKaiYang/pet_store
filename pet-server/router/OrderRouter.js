const express = require('express')
const router = express.Router()
const {
  confirmOrder,
  getOrder,
  successOrder,
  cancelOrder,
  getOrderAndGood,
  searchOrder,
  adminDelOrder,
  adminSuccessOrder,
  adminSearchOrderGood
} = require('../router_handler/OrderHandler')
const jwtMiddleware = require('../utils/jwtMiddleware')
//确认订单
router.post('/confirmOrder', confirmOrder)

//获取订单
router.get('/getOrder', getOrder)

//取消订单
router.post('/cancelOrder', cancelOrder)

//确认完成订单
router.post('/successOrder', successOrder)

//管理员
router.get('/admin/getOrder', jwtMiddleware, getOrderAndGood)
router.post('/admin/searchOrder', jwtMiddleware, searchOrder)
router.post('/admin/delOrder', jwtMiddleware, adminDelOrder)

router.post('/admin/successOrder', jwtMiddleware, adminSuccessOrder)

router.post('/admin/searchOrderGood', jwtMiddleware, adminSearchOrderGood)
//暴漏数据
module.exports = router
