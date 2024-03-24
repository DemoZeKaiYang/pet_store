//
const serviceImageModel = require('../model/ServiceImageModel.js')
const serviceDetailModel = require('../model/ServiceDetailModel.js')
const serviceDetailCommentModel = require('../model/ServiceCommentModel.js')
//
serviceDetailModel.hasMany(serviceImageModel, { foreignKey: 'service_detail_id' })
serviceDetailModel.hasMany(serviceDetailCommentModel, { foreignKey: 'service_detail_id' })
//
const getServiceDetail = async (req, res) => {
  if (!req.query.service_id) return res.json({ code: 2001, message: '没有传递id' })
  const { service_id } = req.query
  try {
    const result = await serviceDetailModel.findAll({
      where: {
        service_id
      },
      include: [{ model: serviceImageModel }, { model: serviceDetailCommentModel }]
    })
    const data = result[0].dataValues
    return res.json({ code: 2000, message: '获取数据成功', data })
  } catch (error) {
    console.log(error)
    return res.json({ code: 2002, message: '数据库问题' })
  }
}
module.exports = {
  getServiceDetail
}
