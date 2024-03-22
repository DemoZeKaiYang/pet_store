const express = require('express')

const router = express.Router()
const jwtMiddleware = require('../utils/jwtMiddleware')
const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({ extended: false })

const { loginAdmin } = require('../router_handler/AdminHandler')
//返回该用户的地址
router.post('/loginAdmin', loginAdmin)

module.exports = router
