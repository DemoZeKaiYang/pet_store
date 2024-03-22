const Joi = require('joi')

//添加用户数据的校验--登录同理可以直接复用
const adminUserValidate = (value) => {
  const result = Joi.object({
    username: Joi.string().required().error(new Error('手机号不符合规范')),
    password: Joi.string().required().error(new Error('密码不符合验证规则'))
  }).validate(value, {
    // false：表示对所有字段进行校验错误；如果不定义，只要发现不合法的字段就会停止校验
    abortEarly: false,
    // 允许验证被对象包含没有定义校验规则的未知字段，否则会认为被校验数据不通过
    allowUnknown: true
  })
  if (result.error) {
    return false
  } else {
    return true
  }
}
module.exports = {
  adminUserValidate
}
