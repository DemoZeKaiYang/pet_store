const Joi = require('joi')

//添加用户数据的校验--登录同理可以直接复用
const addAndUpdateCategoryValidate = (value) => {
  const result = Joi.object({
    good_category_name: Joi.string().required().error(new Error('种类名称')),
    level: Joi.number().required().error(new Error('等级是必需的')),
    good_kind_id: Joi.string().required().error(new Error('种类id是必须的')),
    good_kind_name: Joi.string().required().error(new Error('种类名称是必须的')),
    good_category_order: Joi.number().required().error(new Error('排序是必需的')),
    good_category_image: Joi.string().required().error(new Error('图片是必需的')),
    good_category_display: Joi.string().required().error(new Error('显示是必需的'))
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
  addAndUpdateCategoryValidate
}
