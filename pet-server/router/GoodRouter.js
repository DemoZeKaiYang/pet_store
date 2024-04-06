const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const jwtMiddleware = require('../utils/jwtMiddleware')
const {
  getGoods,
  getGoodsDetail,
  adminGetGood,
  adminAddGood,
  adminUpdateGood,
  adminDelGood,
  adminSearchGood,
  adminUploadGood
} = require('../router_handler/GoodHandler')

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

router.get('/good', urlencodedParser, getGoods)
//详细路由
router.post('/good', getGoodsDetail)

//管理员管理商品
router.get('/admin/getGoods', jwtMiddleware, adminGetGood)
router.post('/admin/addGood', jwtMiddleware, adminAddGood)
router.post('/admin/updateGood', jwtMiddleware, adminUpdateGood)
router.post('/admin/delGood', jwtMiddleware, adminDelGood)
router.post('/admin/searchGood', jwtMiddleware, adminSearchGood)
router.post('/admin/uploadGood', jwtMiddleware, upload.single('good_image'), adminUploadGood)
module.exports = router
