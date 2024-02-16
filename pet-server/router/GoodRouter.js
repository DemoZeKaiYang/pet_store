const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const { getGoods, getGoodsDetail } = require('../router_handler/GoodHandler')

//
router.get('/good', urlencodedParser, getGoods)
//详细路由
router.post('/good', getGoodsDetail)

module.exports = router
