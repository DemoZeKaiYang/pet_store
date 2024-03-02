const express = require('express')
const router = express.Router()
const jwtMiddleware = require('../utils/jwtMiddleware')
const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({ extended: false })

const {
  getAddress,
  addAddress,
  delAddress,
  getDefaultAddress
} = require('../router_handler/AddressHandler')

//返回该用户的地址
router.get('/address', jwtMiddleware, urlencodedParser, getAddress)
//返回默认地址
router.get('/address/default', jwtMiddleware, getDefaultAddress)
router.post('/address', jwtMiddleware, addAddress)
router.post('/address/del', jwtMiddleware, delAddress)

module.exports = router
