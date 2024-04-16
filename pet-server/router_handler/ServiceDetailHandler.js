const serviceImageModel = require('../model/ServiceImageModel.js')
const serviceDetailModel = require('../model/ServiceDetailModel.js')
const serviceDetailCommentModel = require('../model/ServiceCommentModel.js')
serviceDetailModel.hasMany(serviceImageModel, { foreignKey: 'service_detail_id' })
serviceDetailModel.hasMany(serviceDetailCommentModel, { foreignKey: 'service_detail_id' })

const { Op } = require('sequelize')

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

//管理员
const adminGetService = async (req, res) => {
  try {
    const data = await serviceDetailModel.findAll({
      include: [
        {
          model: serviceImageModel,
          order: [
            ['service_image_type', 'DESC'],
            ['service_image_order', 'DESC']
          ]
        }
      ]
    })

    return res.json({ code: 2000, message: '获取数据成功', data })
  } catch (error) {
    console.log(error)
    return res.json({ code: 2002, message: '数据库问题' })
  }
}
const adminAddService = async (req, res) => {}
const adminUpdateService = async (req, res) => {}
const adminDelService = async (req, res) => {}

const adminSearchService = async (req, res) => {
  if (!req.body.search) return res.json({ code: 2003, message: '不能查询为空' })
  try {
    const result = await serviceDetailModel.findAll({
      where: { service_name: { [Op.like]: `%${req.body.search}%` } },
      include: [{ model: serviceImageModel, order: [['service_image_type', 'DESC']] }]
    })
    const arr = result.map((item) => item.dataValues)
    return res.json({ code: 2000, message: '获取成功', data: arr })
  } catch (error) {
    console.log(error)
    return res.json({ code: 2001, message: '获取服务失败' })
  }
}
const adminUploadService = async (req, res) => {}
module.exports = {
  getServiceDetail,
  adminGetService,
  adminAddService,
  adminUpdateService,
  adminDelService,
  adminSearchService,
  adminUploadService
}
