const { addUserValidate, updateUserValidate } = require('../schema/UserSchema')
const userModel = require('../model/UserModel')
const { v4: uuidv4 } = require('uuid')
// bcryptjs 对用户密码进行加密
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const secret = require('../secret')

// 添加用户处理
const addUser = async (req, res) => {
  //验证请求体携带的phone和password的格式是否正确
  if (addUserValidate(req.body)) {
    //验证是否在数据库中存在该手机号
    const isPhone = await userModel.findAll({
      attributes: ['user_phone'],
      where: { user_phone: req.body.phone }
    })
    //返回用户注册过
    if (isPhone.length > 0)
      return res.json({ code: 201, message: '该用户已经注册过了', data: {} })

    //注册新用户
    const isCreate = await userModel.create({
      user_id: uuidv4(),
      user_phone: req.body.phone,
      user_password: bcryptjs.hashSync(req.body.password, 10)
    })
    console.log(isCreate)
    res.json({
      code: 200,
      message: '注册新用户成功',
      // 返回新生成的信息
      data: {}
    })
  }
}

//登录方法
const loginUser = async (req, res) => {
  //逻辑：验证携带过来的数据,查找是否有，有的话生成token，然后放回，无提示用户
  if (addUserValidate(req.body)) {
    //用户存在，获取用户的密码和手机号码
    const confirmPassword = await userModel.findAll({
      attributes: ['user_password'],
      where: { user_phone: req.body.phone }
    })
    if (confirmPassword.length > 0) {
      //获取数据库存储的加密密码
      const password = confirmPassword[0].dataValues.user_password

      //判断数据库密码和用户传过来的密码是否一致
      if (bcryptjs.compareSync(req.body.password, password)) {
        // 查找数据库，放回所有相关的信息
        const userInfo = await userModel.findAll({
          attributes: { exclude: ['user_password'] }
        })
        let token = jwt.sign(req.body, secret, {
          expiresIn: 60 * 60 * 24 * 7
        })
        return res.json({
          code: 200,
          message: '登录成功',
          data: {
            user: userInfo[0].dataValues,
            token: 'Bearer ' + token
          }
        })
      }
      return res.json({ code: 201, message: '密码错误', data: {} })
    } else {
      return res.json({ code: 202, message: '用户还尚未注册', data: {} })
    }
  }
  return res.json({ code: 203, message: '手机号或密码格式错误', data: {} })
}

//上传头像
const uploadAvatar = async (req, res) => {
  //返回图片的名字，存储在pinia
  res.json({
    code: 200,
    data: {
      user_avatar: req.file.filename
    },
    message: '上传图片成功'
  })
}

//修改用户
const updateUser = async (req, res) => {
  //校验用户提交的数据
  if (!updateUserValidate(req.body))
    return res
      .status(401)
      .json({ code: 401, message: '修改用户失败,请检查数据格式', data: {} })

  try {
    //test
    //保存信息的数据库
    const updateResult = await userModel.update(req.body, {
      where: { user_id: req.body.user_id }
    })
    //修改成功
    const result = await userModel.findAll({
      attributes: { exclude: ['user_password'] },
      where: { user_id: req.body.user_id }
    })

    return res.json({
      code: 200,
      message: '修改用户成功',
      data: result[0].dataValues
    })
  } catch (error) {
    return res.status(401).json({
      code: 401,
      message: '修改用户失败',
      data: error
    })
  }
}

module.exports = {
  addUser,
  loginUser,
  uploadAvatar,
  updateUser
}
