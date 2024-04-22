const express = require('express')
const router = express.Router()
const {
  getPets,
  uploadsPetImage,
  addOrUpdatePets,
  delPets,
  adminGetPet,
  adminAddPet,
  adminUpdatePet,
  adminDelPet,
  adminSearchPet,
  adminUploadPet
} = require('../router_handler/PetHandler')
const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const multer = require('multer')

const path = require('path')
const jwtMiddleware = require('../utils/jwtMiddleware')

const storage = multer.diskStorage({
  //保存路径
  destination: function (req, file, cb) {
    cb(null, path.resolve(__dirname, '../pet_uploads'))
    //注意这里的文件路径,不是相对路径，直接填写从项目根路径开始写就行了
  },
  //保存在 destination 中的文件名
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
})
//存储在这个文字
const upload = multer({ storage })

router.get('/pet', jwtMiddleware, urlencodedParser, getPets)
//上传宠物图片
router.post('/pet/upload', jwtMiddleware, upload.single('pet_avatar'), uploadsPetImage)

router.post('/pet', jwtMiddleware, addOrUpdatePets)
router.post('/pet/del', jwtMiddleware, delPets)
//管理员管理宠物
router.get('/admin/getPet', jwtMiddleware, adminGetPet)
router.post('/admin/addPet', jwtMiddleware, adminAddPet)
router.post('/admin/updatePet', jwtMiddleware, adminUpdatePet)
router.post('/admin/delPet', jwtMiddleware, adminDelPet)
router.post('/admin/searchPet', jwtMiddleware, adminSearchPet)
router.post('/admin/uploadPet', jwtMiddleware, upload.single('pet_avatar'), adminUploadPet)
module.exports = router
