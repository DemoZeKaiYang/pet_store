const express = require('express')
const router = express.Router()
const jwtMiddleware = require('../utils/jwtMiddleware')
const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const {
  getAdopt,
  getAdoptOne,
  applyAdopt,
  AdminSearchAdopt,
  AdminAddAdopt,
  adminDelAdopt,
  adminUpdateAdopt
} = require('../router_handler/AdoptHandler')

router.get('/adopt', getAdopt)
router.post('/adopt', getAdoptOne)
router.post('/applyAdopt', applyAdopt)
router.post('/admin/searchAdopt', jwtMiddleware, AdminSearchAdopt)
router.post('/admin/addAdopt', jwtMiddleware, AdminAddAdopt)
router.post('/admin/delAdopt', jwtMiddleware, adminDelAdopt)
router.post('/admin/updateAdopt', jwtMiddleware, adminUpdateAdopt)
module.exports = router
