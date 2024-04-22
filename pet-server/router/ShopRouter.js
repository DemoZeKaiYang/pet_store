const express = require('express')
const router = express.Router()
const jwtMiddleware = require('../utils/jwtMiddleware')
const path = require('path')
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

//种类
const {
  getCategory,
  adminGetShopKind,
  adminAddShopKind,
  adminDelShopKind,
  adminUpdateShopKind,
  adminSearchShopKind
} = require('../router_handler/ShopHandler')

//分类
const {
  adminGetShopCategory,
  adminAddShopCategory,
  adminUpdateShopCategory,
  adminDelShopCategory,
  adminSearchShopCategory,
  adminUploadShopCategory
} = require('../router_handler/CategoryHandler')

//用户使用的接口-获取分类
router.get('/shop/goodKind', getCategory)

//管理员使用的接口
//种类
router.get('/admin/shop/kind', jwtMiddleware, adminGetShopKind)
router.post('/admin/shop/addKind', jwtMiddleware, adminAddShopKind)
router.post('/admin/shop/updateKind', jwtMiddleware, adminUpdateShopKind)
router.post('/admin/shop/delKind', jwtMiddleware, adminDelShopKind)
router.post('/admin/shop/search', jwtMiddleware, adminSearchShopKind)

//分类
router.get('/admin/shop/Category', jwtMiddleware, adminGetShopCategory)
router.post('/admin/shop/addCategory', jwtMiddleware, adminAddShopCategory)
router.post('/admin/shop/updateCategory', jwtMiddleware, adminUpdateShopCategory)
router.post('/admin/shop/delCategory', jwtMiddleware, adminDelShopCategory)
router.post('/admin/shop/searchCategory', jwtMiddleware, adminSearchShopCategory)
router.post('/admin/shop/uploadCategory', jwtMiddleware, upload.single('good_category_image'), adminUploadShopCategory)
module.exports = router
