const express = require('express')
const router = express.Router()
const jwtMiddleware = require('../utils/jwtMiddleware')
const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({ extended: false })

const { getServiceTypeHandler } = require('../router_handler/ServiceTypeHandler')
const { getService } = require('../router_handler/ServiceHandler')
//获取服务类型
router.get('/getServiceType', getServiceTypeHandler)

//
router.post('/getService', getService)

module.exports = router
