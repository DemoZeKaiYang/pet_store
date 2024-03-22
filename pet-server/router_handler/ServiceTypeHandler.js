const serviceTypeModel = require('../model/ServiceTypeModel')
const getServiceTypeHandler = async (req, res) => {
  try {
    const result = await serviceTypeModel.findAll()

    let arr = result
      .map((item) => {
        return item.dataValues
      })
      .sort((a, b) => a.service_type_order - b.service_type_order)
    console.log(arr)
    return res.json({ code: 2000, message: '获取服务类型', data: arr })
  } catch (error) {
    return res.json({ code: 2001, message: '数据库失败' })
  }
}

module.exports = {
  getServiceTypeHandler
}
