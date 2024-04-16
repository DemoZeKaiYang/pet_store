const Joi = require('joi')
const notFutureDate = require('../utils/notFutureDate')
//添加用户数据的校验--登录同理可以直接复用
const addUserValidate = (value) => {
  const result = Joi.object({
    phone: Joi.string()
      .regex(/^1[3-9]\d{9}$/)
      .required()
      .error(new Error('手机号不符合规范')),
    password: Joi.string()
      .required()
      .regex(/^[a-zA-Z]\w{5,17}$/)
      .error(new Error('密码不符合验证规则'))
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

//修改用户的校验规则
const updateUserValidate = (value) => {
  const result = Joi.object({
    user_id: Joi.string()
      .guid({ version: ['uuidv4'] })
      .required()
      .error(new Error('id错误')),
    user_phone: Joi.string()
      .regex(/^1[3-9]\d{9}$/)
      .required()
      .error(new Error('手机号不符合规范')),
    user_name: Joi.string()
      .min(4) // 最小长度4
      .max(16) // 最大长度16
      .regex(/^[\u0041-\u005A\u0061-\u007A\u4E00-\u9FFF0-9_]+$/)
      .error(new Error('用户名错误')),
    user_birthday: Joi.date()
      .iso() // 确保日期格式为 ISO 8601 (YYYY-MM-DD)
      .required() // 确保生日字段是必需的
      .custom((value, helpers) => {
        // 如果日期是将来日期，则验证失败
        if (!notFutureDate(value)) {
          return helpers.error('birthday', '生日不能是未来的日期')
        }
        return value
      }),
    user_signature: Joi.string().error(new Error('用户个性签名错误')),
    user_avatar: Joi.string().error(new Error('用户头像错误'))
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

const updatePasswordValidate = (value) => {
  const result = Joi.object({
    user_id: Joi.string()
      .guid({ version: ['uuidv4'] })
      .required()
      .error(new Error('id错误')),
    old_password: Joi.string()
      .regex(/^[a-zA-Z]\w{5,17}$/)
      .required()
      .error(new Error('用户旧密码错误')),
    new_password: Joi.string()
      .regex(/^[a-zA-Z]\w{5,17}$/)
      .required()
      .error(new Error('新密码不符合规范'))
  }).validate(value, {
    // false：表示对所有字段进行校验错误；如果不定义，只要发现不合法的字段就会停止校验
    abortEarly: false,
    // 允许验证被对象包含没有定义校验规则的未知字段，否则会认为被校验数据不通过
    allowUnknown: true
  })
  if (result.error) {
    console.log(result.error)
    return false
  } else {
    return true
  }
}
module.exports = {
  addUserValidate,
  updateUserValidate,
  updatePasswordValidate
}
