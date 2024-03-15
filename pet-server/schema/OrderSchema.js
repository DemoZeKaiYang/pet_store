const Joi = require('joi')
const confirmOrderValidate = (value) => {
  const result = Joi.object({
    shipping_address: Joi.string()
      .required()
      .error(new Error('address_id不规范')),
    goodList: Joi.array().required().error(new Error('商品信息错误')),
    user_id: Joi.string()
      .guid({ version: ['uuidv4'] })
      .required()
      .error(new Error('用户id错误')),
    create_date: Joi.string()
      .isoDate()
      .required()
      .error(new Error('日期不正确')),
    order_number: Joi.number().required().error(new Error('订单编号错误'))
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
  confirmOrderValidate
}
