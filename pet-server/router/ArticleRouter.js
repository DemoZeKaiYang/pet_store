const express = require('express')
const router = express.Router()
const jwtMiddleware = require('../utils/jwtMiddleware')
const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const multer = require('multer')
const path = require('path')
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve(__dirname, '../article_uploads'))
  },

  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
})
const upload = multer({ storage })
const {
  getArticleAdmin, AdminSearchArticle, AdminAddArticle,
  AdminDelArticle,
  AdminUpdateArticle,uploadArticle,
  getArticleContent
} = require('../router_handler/ArticleHandler')

router.get('/getArticle', getArticleAdmin)

router.get('/admin/getArticle', jwtMiddleware, getArticleAdmin)
router.post('/admin/searchArticle', jwtMiddleware, AdminSearchArticle)
router.post('/admin/addArticle', jwtMiddleware, AdminAddArticle)
router.post('/admin/delArticle', jwtMiddleware, AdminDelArticle)
router.post('/admin/updateArticle', jwtMiddleware, AdminUpdateArticle)
router.post('/admin/uploadArticle', jwtMiddleware,upload.single('article_image'), uploadArticle)
router.post('/getArticleContent', getArticleContent)
module.exports = router
