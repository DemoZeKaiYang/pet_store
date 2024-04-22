const express = require('express')
const router = express.Router()

const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const multer = require('multer')
const { getKinds } = require('../router_handler/PetKindHandler')

//获取种类
router.get('/kind', getKinds)
router.get('/admin/getPetKind', getKinds)
module.exports = router
