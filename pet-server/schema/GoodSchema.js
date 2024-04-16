const Joi = require('joi')

//添加用户数据的校验--登录同理可以直接复用
const addAndUpdateGoodValidate = (value) => {
  const result = Joi.object({
    good_name: Joi.string().required().error(new Error('商品名称是必须的')),
    good_price: Joi.number().required().error(new Error('商品价格是必需的')),
    good_origin_price: Joi.number().required().error(new Error('商品原价是必须的')),
    good_comment_num: Joi.number().required().error(new Error('商品评论数量是必须的')),
    good_sold_num: Joi.number().required().error(new Error('商品销售数量是必需的')),
    parent_category_id: Joi.number().required().error(new Error('商品种类id是必需的'))
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
  addAndUpdateGoodValidate
}
