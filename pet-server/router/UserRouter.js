const express = require('express')
const router = express.Router()
const path = require('path')
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const jwtMiddleware = require('../utils/jwtMiddleware')
//图片处理
const multer = require('multer')
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve(__dirname, '../uploads'))
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
})
//存储在这个文字
const upload = multer({ storage })

const {
  addUser,
  loginUser,
  uploadAvatar,
  adminUploadUser,
  updateUser,
  adminGetUser,

  adminUpdateUser,
  updatePassword,
  adminSearchUser
} = require('../router_handler/UserHandler')

//注册用户
router.post('/user', jsonParser, addUser)
// 登录用户
router.post('/user/login', loginUser)
// 更新头像
router.post('/user/upload', jwtMiddleware, upload.single('avatar'), uploadAvatar)
//更新用户
router.post('/user/update', jwtMiddleware, updateUser)

//管理
router.get('/admin/getUser', jwtMiddleware, adminGetUser)
router.post('/admin/updateUser', jwtMiddleware, adminUpdateUser)
router.post('/admin/searchUser', jwtMiddleware, adminSearchUser)
router.post('/admin/uploadUser', jwtMiddleware, upload.single('user_avatar'), adminUploadUser)

// 修改密码
router.post('/admin/updatePassword', jwtMiddleware, updatePassword)
//暴漏数据
module.exports = router
