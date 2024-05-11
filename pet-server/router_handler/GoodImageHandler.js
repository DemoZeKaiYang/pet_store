const goodImageModel = require('../model/GoodImageModel')
const goodModel = require('../model/GoodModel')
const { v4: uuidv4 } = require('uuid')
const { Op } = require('sequelize')
const goodCategoriesModel = require('../model/GoodCategoriesModel')
goodImageModel.belongsTo(goodModel, { foreignKey: 'good_id' })
const adminGetGoodImage = async (req, res) => {
  try {
    const result = await goodImageModel.findAll({
      order: [
        ['good_id', 'ASC'],
        ['good_image_type', 'ASC'],
        ['good_image_order', 'ASC']
      ],
      include: [{ model: goodModel }]
    })

    const data1 = result.map((item) => {
      return item.dataValues
    })

    // 使用reduce方法按good_id分组数据
    const groupedData = data1.reduce((accumulator, currentValue) => {
      // 如果accumulator中还没有这个good_id的分组，则初始化一个空数组
      if (!accumulator[currentValue.good_id]) {
        accumulator[currentValue.good_id] = []
      }
      // 将当前项添加到对应的分组中
      accumulator[currentValue.good_id].push(currentValue)
      // 返回更新后的accumulator对象
      return accumulator
    }, {})

    // 将分组对象转换为数组，其中每个元素是一个包含相同good_id的项的数组
    const data = Object.values(groupedData)

    return res.json({ code: 2000, message: '获取商品成功', data })
  } catch (error) {
    console.log(error)
    return res.json({ code: 2001, message: '失败', data: error })
  }
}

const adminUploadGoodImage = async (req, res) => {
  if (!req.file.filename) {
    return res.json({ code: 2001, message: '上传图片失败' })
  }
  return res.json({
    code: 2000,
    data: { good_image: req.file.filename },
    message: '上传图片成功'
  })
}

const adminAddGoodImage = async (req, res) => {
  try {
    const result = await goodImageModel.create({
      good_image_id: uuidv4(),
      ...req.body
    })
    return res.json({ code: 2000, message: '添加成功' })
  } catch (error) {
    console.log(error)
    return res.json({ code: 2001, message: '添加失败' })
  }
}

//通过ID获取
const adminGetGoodImageId = async (req, res) => {
  if (!req.body.good_id) return res.json({ code: 2002, message: '没有传递ID失败' })
  const { good_id } = req.body
  const result = await goodImageModel.findAll({
    where: { good_id },
    order: [
      ['good_image_type', 'ASC'],
      ['good_image_order', 'ASC']
    ],
    include: [{ model: goodModel }]
  })
  const data = result.map((item) => {
    return item.dataValues
  })

  return res.json({ code: 2000, message: '成功获取对应的数据', data })
}

const adminUpdateGoodImage = async (req, res) => {
  if (!req.body.good_image_id) {
    return res.json({ code: 2002, message: '传递的数据有误' })
  }
  const { good_image_id } = req.body
  try {
    const result = await goodImageModel.update(req.body, { where: { good_image_id } })
    return result.length >= 0 ? res.json({ code: 2000, message: '修改成功' }) : res.json({ code: 2004, message: '修改失败' })
  } catch (error) {
    return res.json({ code: 2001, message: '修改失败' })
  }
}
const adminDelGoodImage = async (req, res) => {
  try {
    // 检查id是否为数组
    const isBatchDelete = Array.isArray(req.body.good_image_id)
    // 定义删除操作
    let deleteOperation
    deleteOperation = isBatchDelete
      ? { where: { good_image_id: { [Op.in]: req.body.good_image_id } } }
      : { where: { good_image_id: req.body.good_image_id } }
    // 执行删除操作
    const result = await goodImageModel.destroy(deleteOperation)
    // 根据删除操作的成功与否返回不同的响应
    return result ? res.json({ code: 2000, message: isBatchDelete ? '批量删除成功' : '单个删除成功' }) : res.json({ code: 2001, message: '删除失败' })
  } catch (error) {
    return res.json({ code: 2001, message: '删除失败' })
  }
}

const adminSearchGoodImage = async (req, res) => {
  if (!req.body.search) return res.json({ code: 2003, message: '不能查询为空' })

  try {
    const result = await goodImageModel.findAll({
      order: [
        ['good_id', 'ASC'],
        ['good_image_type', 'ASC'],
        ['good_image_order', 'ASC']
      ],
      include: [{ model: goodModel, where: { good_name: { [Op.like]: `%${req.body.search}%` } } }]
    })

    const data1 = result.map((item) => {
      return item.dataValues
    })

    // 使用reduce方法按good_id分组数据
    const groupedData = data1.reduce((accumulator, currentValue) => {
      // 如果accumulator中还没有这个good_id的分组，则初始化一个空数组
      if (!accumulator[currentValue.good_id]) {
        accumulator[currentValue.good_id] = []
      }
      // 将当前项添加到对应的分组中
      accumulator[currentValue.good_id].push(currentValue)
      // 返回更新后的accumulator对象
      return accumulator
    }, {})

    // 将分组对象转换为数组，其中每个元素是一个包含相同good_id的项的数组
    const data = Object.values(groupedData)

    return res.json({ code: 2000, message: '获取商品成功', data })
  } catch (error) {
    console.log(error)
    return res.json({ code: 2001, message: '失败', data: error })
  }
}
module.exports = {
  adminGetGoodImage,
  adminUploadGoodImage,
  adminAddGoodImage,
  adminGetGoodImageId,
  adminUpdateGoodImage,
  adminDelGoodImage,
  adminSearchGoodImage
}
