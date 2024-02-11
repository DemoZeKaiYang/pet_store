const express = require('express')
const router = express.Router()
const path = require('path')
//导入body-parser
const bodyParser = require('body-parser')
//解析json格式的请求体的中间件
const jsonParser = bodyParser.json()
//解析querystring请求体的中间件
const urlencodedParser = bodyParser.urlencoded({ extended: false })
//图片处理
const multer = require('multer')
//jwt密钥
const secret = require('../secret')
//导入express-jwt
const { expressjwt: jwt } = require('express-jwt')

const storage = multer.diskStorage({
  //保存路径
  destination: function (req, file, cb) {
    cb(null, path.resolve(__dirname, '../uploads'))
    //注意这里的文件路径,不是相对路径，直接填写从项目根路径开始写就行了
  },
  //保存在 destination 中的文件名
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
  updateUser
} = require('../router_handler/UserHandler')

//jwt中间件
const jwtMiddleware = jwt({
  secret,
  algorithms: ['HS256'], // 使用HS256算法
  customError: function (err, req, res) {
    response.status(401).json({
      message: '没有设置token,无法修改'
    })
  }
})

// .unless({
//   path: ['/path1', '/path2'] // 允许这些路径不需要验证
// })

//注册用户
router.post('/user', jsonParser, addUser)
// 登录用户
router.post('/user/login', loginUser)
// 更新头像
router.post(
  '/user/upload',
  jwtMiddleware,
  upload.single('avatar'),
  uploadAvatar
)
//更新用户
router.post('/user/update', jwtMiddleware, updateUser)

//暴漏数据
module.exports = router
