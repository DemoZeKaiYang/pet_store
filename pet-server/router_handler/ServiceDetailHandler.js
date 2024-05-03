const serviceImageModel = require('../model/ServiceImageModel.js')
const serviceDetailModel = require('../model/ServiceDetailModel.js')
const serviceDetailCommentModel = require('../model/ServiceCommentModel.js')
serviceDetailModel.hasMany(serviceImageModel, { foreignKey: 'service_detail_id' })
serviceDetailModel.hasMany(serviceDetailCommentModel, { foreignKey: 'service_detail_id' })
const { v4: uuidv4 } = require('uuid')
const { Op } = require('sequelize')
const serviceOrderModel = require('../model/ServiceOrderModel.js')

const getServiceDetail = async (req, res) => {
  if (!req.query.service_id) return res.json({ code: 2001, message: '没有传递id' })
  const { service_id } = req.query
  try {
    const result = await serviceDetailModel.findAll({
      where: {
        service_id
      },
      include: [
        {
          model: serviceImageModel,
          order: [
            ['service_image_type', 'ASC'],
            ['service_image_order', 'ASC']
          ]
        },
        { model: serviceDetailCommentModel }
      ]
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
const evalService = async (req, res) => {
  if (Object.keys(req.body).length === 0) return res.json({ code: 2003, message: '传递数据有误' })

  try {
    const result = await serviceDetailModel.findAll({
      where: { service_id: req.body.service_id }
    })
    const service_detail_id = result[0].dataValues.service_detail_id
    await serviceDetailCommentModel.create({ ...req.body, service_detail_id, service_comment_id: uuidv4() })
    await serviceOrderModel.update({ service_status: 5 }, { where: { service_order_id: req.body.service_order_id } })
    return res.json({ code: 2000, message: '评价成功' })
  } catch (error) {
    console.log(error)
    return res.json({ code: 2001, message: '获取服务失败' })
  }
}

const adminAddServiceDetail = async (req, res) => {
  if (Object.keys(req.body).length === 0) {
    return res.json({ code: 2002, message: '传递的数据有误' })
  }
  try {
    const result = await serviceDetailModel.create({
      ...req.body,
      service_detail_id: uuidv4()
    })
    return res.json({ code: 2000, message: '添加成功' })
  } catch (error) {
    console.log(error)
    return res.json({ code: 2001, message: '修改失败' })
  }
}
const adminUpdateServiceDetail = async (req, res) => {
  if (Object.keys(req.body).length === 0) {
    return res.json({ code: 2002, message: '传递的数据有误' })
  }
  try {
    const result = await serviceDetailModel.update(req.body, { where: { service_detail_id: req.body.service_detail_id } })
    return result.length >= 0 ? res.json({ code: 2000, message: '修改成功' }) : res.json({ code: 2004, message: '修改失败' })
  } catch (error) {
    console.log(error)
    return res.json({ code: 2001, message: '修改失败' })
  }
}

const adminDelServiceDetail = async (req, res) => {
  try {
    // 检查id是否为数组
    const isBatchDelete = Array.isArray(req.body.service_detail_id)
    // 定义删除操作
    let deleteOperation
    deleteOperation = isBatchDelete
      ? { where: { service_detail_id: { [Op.in]: req.body.service_detail_id } } }
      : { where: { service_detail_id: req.body.service_detail_id } }
    // 执行删除操作
    const result = await serviceDetailModel.destroy(deleteOperation)
    // 根据删除操作的成功与否返回不同的响应
    return result ? res.json({ code: 2000, message: isBatchDelete ? '批量删除成功' : '单个删除成功' }) : res.json({ code: 2001, message: '删除失败' })
  } catch (error) {
    console.error('删除过程中发生错误:', error)
    return res.json({ code: 2001, message: '删除失败' })
  }
}
module.exports = {
  getServiceDetail,
  adminGetService,
  adminSearchService,
  evalService,
  adminAddServiceDetail,
  adminUpdateServiceDetail,
  adminDelServiceDetail
}
