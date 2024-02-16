const express = require('express')
const router = express.Router()

const { getCategory } = require('../router_handler/ShopHandler')

//获取分类
router.get('/shop/category', getCategory)

//暴漏数据
module.exports = router
