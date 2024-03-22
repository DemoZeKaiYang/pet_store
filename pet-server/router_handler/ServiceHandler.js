const serviceModel = require('../model/ServiceModel')
const getService = async (req, res) => {
  if (!req.body.service_type_id) return res.json({ code: 2001, message: '没有传递id' })

  const { service_type_id } = req.body
  try {
    const result = await serviceModel.findAll({
      where: {
        service_type_id
      }
    })
    const arr = result
      .map((item) => {
        return item.dataValues
      })
      .sort((a, b) => a.service_order - b.service_order)
    return res.json({ code: 2000, message: '没有传递id', data: arr })
  } catch (error) {
    return res.json({ code: 2002, message: '数据库错误' })
  }
}
module.exports = {
  getService
}
