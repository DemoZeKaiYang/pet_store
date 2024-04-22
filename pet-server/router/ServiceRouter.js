const express = require('express')
const router = express.Router()
const jwtMiddleware = require('../utils/jwtMiddleware')
const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({ extended: false })

const { getServiceTypeHandler } = require('../router_handler/ServiceTypeHandler')
const { getService, confirmService, getServiceOrder, cancelServiceOrder, successServiceOrder } = require('../router_handler/ServiceHandler')
const {
  getServiceDetail,
  adminGetService,
  adminSearchService,
  evalService,
  adminAddServiceDetail,
  adminUpdateServiceDetail,
  adminDelServiceDetail
} = require('../router_handler/ServiceDetailHandler.js')

//获取服务类型
router.get('/getServiceType', getServiceTypeHandler)

//获取服务类型所对应的服务
router.post('/getService', getService)

//获取服务所对应的详细信息
router.get('/getServiceDetail', getServiceDetail)

//确认服务
router.post('/confirmService', confirmService)

//获取服务订单
router.get('/getServiceOrder', getServiceOrder)

//取消订单
router.post('/cancelServiceOrder', cancelServiceOrder)

//确认完成订单
router.post('/successServiceOrder', successServiceOrder)

//评价服务
router.post('/evalService', evalService)
//admin
router.get('/admin/getService', jwtMiddleware, adminGetService)
router.post('/admin/searchService', jwtMiddleware, adminSearchService)
router.post('/admin/addServiceDetail', jwtMiddleware, adminAddServiceDetail)
router.post('/admin/updateServiceDetail', jwtMiddleware, adminUpdateServiceDetail)
router.post('/admin/adminDelServiceDetail', jwtMiddleware, adminDelServiceDetail)
module.exports = router
