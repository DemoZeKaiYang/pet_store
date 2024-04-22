const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const path = require('path')
const jwtMiddleware = require('../utils/jwtMiddleware')
const {
  adminGetGoodImage,
  adminUploadGoodImage,
  adminAddGoodImage,
  adminGetGoodImageId,
  adminUpdateGoodImage,
  adminDelGoodImage,
  adminSearchGoodImage
} = require('../router_handler/GoodImageHandler')
//图片处理
const multer = require('multer')
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve(__dirname, '../good_uploads'))
  },

  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
})
const upload = multer({ storage })

//管理员管理商品
router.get('/admin/getGoodImage', jwtMiddleware, adminGetGoodImage)
router.post('/admin/addGoodImage', jwtMiddleware, adminAddGoodImage)
router.post('/admin/delGoodImage', jwtMiddleware, adminDelGoodImage)
router.post('/admin/searchGoodImage', jwtMiddleware, adminSearchGoodImage)
router.post('/admin/uploadGoodImage', jwtMiddleware, upload.single('good_image'), adminUploadGoodImage)
router.post('/admin/getGoodImageId', jwtMiddleware, adminGetGoodImageId)
//修改
router.post('/admin/updateGoodImage', jwtMiddleware, adminUpdateGoodImage)
//管理员通过ID获取一组图片数据
module.exports = router
