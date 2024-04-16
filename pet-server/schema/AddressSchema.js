const Joi = require('joi')
const addressValidate = (value) => {
  const result = Joi.object({
    address_id: Joi.string()
      .guid({ version: ['uuidv4'] })
      .error(new Error('address_id不规范')),
    address_phone: Joi.string()
      .regex(/^1[3-9]\d{9}$/)
      .required()
      .error(new Error('手机号不符合规范')),
    address_area: Joi.string().required().error(new Error('收货地区错误')),
    address_details: Joi.string().required().error(new Error('收货详细地址')),
    address_name: Joi.string().required().error(new Error('收货人姓名不规范')),
    address_default: Joi.number().required().error(new Error('是否为默认')),
    user_id: Joi.string()
      .guid({ version: ['uuidv4'] })
      .required()
      .error(new Error('用户id错误'))
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

const delAddressValidate = (value) => {
  const result = Joi.object({
    address_id: Joi.string()
      .guid({ version: ['uuidv4'] })
      .error(new Error('address_id不规范'))
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
  addressValidate,
  delAddressValidate
}
