const { adminUserValidate } = require('../schema/adminUserSchema')
const bcryptjs = require('bcryptjs')
const adminModel = require('../model/AdminModel')
const jwt = require('jsonwebtoken')
const secret = require('../secret')

//返回token
const loginAdmin = async (req, res) => {
  const { username: admin_username, password: admin_password } = req.body

  //校验前端传递过来的数据
  if (!adminUserValidate({ username: admin_username, password: admin_password }))
    return res.json({ code: 2001, message: '输入的用户名或密码的格式不对' })

  try {
    //查找数据库的是否存在该管理员
    const findAdminResult = await adminModel.findAll({
      where: {
        admin_username
      }
    })
    //用户管理员存在
    if (findAdminResult.length > 0) {
      const password = findAdminResult[0].dataValues.admin_password
      //比较密码
      if (bcryptjs.compareSync(admin_password, password)) {
        //查询管理员姓名
        const adminInfo = await adminModel.findAll({
          attributes: { exclude: ['admin_password'] }
        })
        //生产token
        let token = jwt.sign(req.body, secret, {
          expiresIn: 60 * 60 * 24 * 7
        })
        return res.json({
          code: 2000,
          message: '登录成功',
          data: {
            admin: adminInfo[0].dataValues,
            token: 'Bearer ' + token
          }
        })
      }
      return res.json({ code: 2004, message: '密码错误' })
    } else {
      return res.json({ code: 2003, message: '登录失败,输入的用户名有误' })
    }
  } catch (error) {
    console.log(error)
    return res.json({ code: 2002, message: error })
  }
}

module.exports = {
  loginAdmin
}
