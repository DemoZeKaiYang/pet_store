const express = require('express')
const router = express.Router()
const secret = require('../secret')
const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({ extended: false })

const { expressjwt: jwt } = require('express-jwt')
const {
  getAddress,
  addAddress,
  delAddress
} = require('../router_handler/AddressHandler')

//jwt中间件
const jwtMiddleware = jwt({
  secret,
  algorithms: ['HS256'], // 使用HS256算法
  customError: function (err, req, res) {
    response.status(401).json({
      message: '没有设置token,无法修改'
    })
  }
})

//返回该用户的地址
router.get('/address', jwtMiddleware, urlencodedParser, getAddress)
router.post('/address', jwtMiddleware, addAddress)
router.post('/address/del', jwtMiddleware, delAddress)
module.exports = router
