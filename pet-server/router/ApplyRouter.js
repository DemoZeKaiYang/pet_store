const express = require('express')
const router = express.Router()
const jwtMiddleware = require('../utils/jwtMiddleware')
const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const { AdminSearchAdopt, AdminAddAdopt, adminDelAdopt, adminUpdateAdopt } = require('../router_handler/AdoptHandler')
const { getApply, AdminUpdateApply, getAdoptApply } = require('../router_handler/ApplyHandler')
router.get('/admin/getApply', jwtMiddleware, getApply)
router.post('/admin/searchAdopt', jwtMiddleware, AdminSearchAdopt)

router.post('/admin/updateApply', jwtMiddleware, AdminUpdateApply)
router.post('/getAdoptApply', jwtMiddleware, getAdoptApply)
module.exports = router
