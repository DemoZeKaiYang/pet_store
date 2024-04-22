const express = require('express')
const router = express.Router()
const jwtMiddleware = require('../utils/jwtMiddleware')
const bodyParser = require('body-parser')
const path = require('path')
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const {
  adminGetServiceImage,
  adminGetAllService,
  adminAddServiceImage,
  adminUploadServiceImage,
  adminUpdateServiceImage,
  adminSearchServiceImage,
  adminDelServiceImage
} = require('../router_handler/ServiceImageHandler.js')

const multer = require('multer')
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve(__dirname, '../service_uploads'))
  },

  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
})
const upload = multer({ storage })

//admin
router.get('/admin/getServiceImage', jwtMiddleware, adminGetServiceImage)

//
router.get('/admin/getAllService', jwtMiddleware, adminGetAllService)
router.post('/admin/addServiceImage', jwtMiddleware, adminAddServiceImage)
router.post('/admin/updateServiceImage', jwtMiddleware, adminUpdateServiceImage)
router.post('/admin/delServiceImage', jwtMiddleware, adminDelServiceImage)
router.post('/admin/searchServiceImage', jwtMiddleware, adminSearchServiceImage)
router.post('/admin/uploadServiceImage', jwtMiddleware, upload.single('service_image'), adminUploadServiceImage)

module.exports = router
