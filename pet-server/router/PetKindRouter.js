const express = require('express')
const router = express.Router()
const { getPets } = require('../router_handler/PetHandler')
const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const multer = require('multer')
const { getKinds } = require('../router_handler/PetKindHandler')

//获取种类
router.get('/kind', getKinds)

//增加种类

//删除种类

//修改种类

//暴漏数据
module.exports = router
