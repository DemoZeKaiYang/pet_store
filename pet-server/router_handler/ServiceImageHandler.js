const serviceDetailModel = require('../model/ServiceDetailModel')
const serviceImageModel = require('../model/ServiceImageModel')
serviceImageModel.belongsTo(serviceDetailModel, { foreignKey: 'service_detail_id' })

const { v4: uuidv4 } = require('uuid')
const { Op } = require('sequelize')
const adminGetServiceImage = async (req, res) => {
  try {
    const result = await serviceImageModel.findAll({
      order: [
        ['service_detail_id', 'ASC'],
        ['service_image_type', 'ASC'],
        ['service_image_order', 'ASC']
      ],
      include: [{ model: serviceDetailModel }]
    })
    const data1 = result.map((item) => {
      return item.dataValues
    })

    // 使用reduce方法按good_id分组数据
    const groupedData = data1.reduce((accumulator, currentValue) => {
      // 如果accumulator中还没有这个good_id的分组，则初始化一个空数组
      if (!accumulator[currentValue.service_detail_id]) {
        accumulator[currentValue.service_detail_id] = []
      }
      // 将当前项添加到对应的分组中
      accumulator[currentValue.service_detail_id].push(currentValue)
      // 返回更新后的accumulator对象
      return accumulator
    }, {})
    // 将分组对象转换为数组，其中每个元素是一个包含相同good_id的项的数组
    const data = Object.values(groupedData)
    return res.json({ code: 2000, message: '获取商品成功', data })
  } catch (error) {
    return res.json({ code: 2001, message: '失败', data: error })
  }
}

const adminGetAllService = async (req, res) => {
  try {
    const data = await serviceDetailModel.findAll()
    return res.json({ code: 2000, message: '获取数据成功', data })
  } catch (error) {
    return res.json({ code: 2002, message: '数据库问题' })
  }
}

const adminAddServiceImage = async (req, res) => {
  try {
    const result = await serviceImageModel.create({
      service_image_id: uuidv4(),
      ...req.body
    })
    return res.json({ code: 2000, message: '添加成功' })
  } catch (error) {
    console.log(error)
    return res.json({ code: 2001, message: '添加失败' })
  }
}
const adminUploadServiceImage = async (req, res) => {
  if (!req.file.filename) {
    return res.json({ code: 2001, message: '上传图片失败' })
  }
  return res.json({
    code: 2000,
    data: { service_image_name: req.file.filename },
    message: '上传图片成功'
  })
}

const adminUpdateServiceImage = async (req, res) => {
  if (!req.body.service_image_id) {
    return res.json({ code: 2002, message: '传递的数据有误' })
  }
  const { service_image_id } = req.body
  try {
    const result = await serviceImageModel.update(req.body, { where: { service_image_id } })
    return result.length >= 0 ? res.json({ code: 2000, message: '修改成功' }) : res.json({ code: 2004, message: '修改失败' })
  } catch (error) {
    return res.json({ code: 2001, message: '修改失败' })
  }
}

const adminSearchServiceImage = async (req, res) => {
  if (!req.body.search) return res.json({ code: 2003, message: '不能查询为空' })
  try {
    const result = await serviceImageModel.findAll({
      order: [
        ['service_detail_id', 'ASC'],
        ['service_image_type', 'ASC'],
        ['service_image_order', 'ASC']
      ],
      include: [{ model: serviceDetailModel, where: { service_name: { [Op.like]: `%${req.body.search}%` } } }]
    })
    const data1 = result.map((item) => {
      return item.dataValues
    })

    // 使用reduce方法按good_id分组数据
    const groupedData = data1.reduce((accumulator, currentValue) => {
      // 如果accumulator中还没有这个good_id的分组，则初始化一个空数组
      if (!accumulator[currentValue.service_detail_id]) {
        accumulator[currentValue.service_detail_id] = []
      }
      // 将当前项添加到对应的分组中
      accumulator[currentValue.service_detail_id].push(currentValue)
      // 返回更新后的accumulator对象
      return accumulator
    }, {})

    // 将分组对象转换为数组，其中每个元素是一个包含相同good_id的项的数组
    const data = Object.values(groupedData)

    return res.json({ code: 2000, message: '获取商品成功', data })
  } catch (error) {
    return res.json({ code: 2001, message: '失败', data: error })
  }
}

const adminDelServiceImage = async (req, res) => {
  try {
    // 检查id是否为数组
    const isBatchDelete = Array.isArray(req.body.service_detail_id)
    // 定义删除操作
    let deleteOperation
    deleteOperation = isBatchDelete
      ? { where: { service_detail_id: { [Op.in]: req.body.service_detail_id } } }
      : { where: { service_detail_id: req.body.service_detail_id } }
    // 执行删除操作
    const result = await serviceImageModel.destroy(deleteOperation)
    // 根据删除操作的成功与否返回不同的响应
    return result ? res.json({ code: 2000, message: isBatchDelete ? '批量删除成功' : '单个删除成功' }) : res.json({ code: 2001, message: '删除失败' })
  } catch (error) {
    return res.json({ code: 2001, message: '删除失败' })
  }
}

module.exports = {
  adminGetServiceImage,
  adminGetAllService,
  adminAddServiceImage,
  adminUploadServiceImage,
  adminUpdateServiceImage,
  adminSearchServiceImage,
  adminDelServiceImage
}
