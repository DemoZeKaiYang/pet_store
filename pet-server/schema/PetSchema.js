const Joi = require('joi')
const notFutureDate = require('../utils/notFutureDate')

const petsValidate = (value) => {
  const result = Joi.object({
    pet_id: Joi.string()
      .guid({ version: ['uuidv4'] })
      .error(new Error('pet_id不规范')),
    pet_avatar: Joi.string().required().error(new Error('头像地址不规范')),
    pet_name: Joi.string().required().error(new Error('宠物名字不规范')),
    pet_kind_id: Joi.string()
      .required()
      .guid({ version: ['uuidv4'] })
      .error(new Error('pet_kind_id不规范')),
    pet_sex: Joi.number().required().error(new Error('宠物性别数据不规范')),
    pet_sterilize: Joi.number()
      .required()
      .error(new Error('宠物绝育数据不规范')),
    user_id: Joi.string()
      .guid({ version: ['uuidv4'] })
      .required()
      .error(new Error('用户id错误')),
    pet_birthday: Joi.date()
      .iso() // 确保日期格式为 ISO 8601 (YYYY-MM-DD)
      .required()
      .custom((value, helpers) => {
        // 如果日期是将来日期，则验证失败
        if (!notFutureDate(value)) {
          return helpers.error('birthday', '生日不能是未来的日期')
        }
        return value
      })
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

const delPetsValidate = (value) => {
  const result = Joi.object({
    pet_id: Joi.string()
      .guid({ version: ['uuidv4'] })
      .required()
      .error(new Error('pet_id不规范'))
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

module.exports = { petsValidate, delPetsValidate }
