const express = require('express')
const router = express.Router()
const jwtMiddleware = require('../utils/jwtMiddleware')
const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({ extended: false })

const {
  getAddress,
  addAddress,
  delAddress,
  getDefaultAddress,
  getAddressAdmin,
  AdminSearchAddress,
  AdminDelAddress,
  AdminUpdateAddress
} = require('../router_handler/AddressHandler')

//返回该用户的地址
router.get('/address', jwtMiddleware, urlencodedParser, getAddress)
//返回默认地址
router.get('/address/default', jwtMiddleware, getDefaultAddress)
router.post('/address', jwtMiddleware, addAddress)
router.post('/address/del', jwtMiddleware, delAddress)

router.get('/admin/getAddress', jwtMiddleware, getAddressAdmin)

router.post('/admin/searchAddress', jwtMiddleware, AdminSearchAddress)

router.post('/admin/delAddress', jwtMiddleware, AdminDelAddress)

router.post('/admin/updateAddress', jwtMiddleware, AdminUpdateAddress)
module.exports = router
