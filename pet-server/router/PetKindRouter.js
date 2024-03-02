const express = require('express')
const router = express.Router()
const { getPets } = require('../router_handler/PetHandler')
const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const multer = require('multer')
const { getKinds } = require('../router_handler/PetKindHandler')

//注册用户
router.get('/kind', getKinds)
// 登录用户

//暴漏数据
module.exports = router
