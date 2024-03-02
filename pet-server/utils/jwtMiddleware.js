//jwt密钥
const secret = require('../secret')
//导入express-jwt
const { expressjwt: jwt } = require('express-jwt')
//jwt中间件
const jwtMiddleware = jwt({
  secret,
  algorithms: ['HS256'], // 使用HS256算法
  customError: function (err, req, res) {
    res.status(401).json({
      message: '没有设置token,无法修改'
    })
  },
  onExpired: async (req, err) => {
    if (new Date() - err.inner.expiredAt < 5000) {
      return
    }
    throw err
  }
})

module.exports = jwtMiddleware
