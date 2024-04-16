const goodCategoriesModel = require('../model/GoodCategoriesModel')
const goodImageModel = require('../model/GoodImageModel')
const goodModel = require('../model/GoodModel')
const { addAndUpdateGoodValidate } = require('../schema/GoodSchema')
const { Op } = require('sequelize')
const { v4: uuidv4 } = require('uuid')
goodModel.hasMany(goodImageModel, { foreignKey: 'good_id' })
goodModel.belongsTo(goodCategoriesModel, { foreignKey: 'parent_category_id' })

//获取商品
const getGoods = async (req, res) => {
  let currentPage = parseInt(req.query.currentPage) || 1
  let pageSize = parseInt(req.query.pageSize) || 10
  let arr = []
  let number = 0
  if (req.query.id && req.query.id !== '') {
    const { count, rows } = await goodModel.findAndCountAll({
      where: {
        parent_category_id: req.query.id
      },
      offset: (currentPage - 1) * pageSize,
      limit: pageSize,
      include: [{ model: goodCategoriesModel }, { model: goodImageModel }]
    })
    arr = rows.map((item) => {
      return {
        ...item.dataValues,
        good_category: item.good_category.dataValues
      }
    })
    number = count
  } else if (req.query.searchValue !== '') {
    const { count, rows } = await goodModel.findAndCountAll({
      where: {
        good_name: {
          [Op.like]: `%${req.query.searchValue}%`
        }
      },
      offset: (currentPage - 1) * pageSize,
      limit: pageSize,
      include: [{ model: goodCategoriesModel }, { model: goodImageModel }]
    })

    arr = rows.map((item) => {
      return {
        ...item.dataValues,
        good_category: item.good_category.dataValues
      }
    })
    number = count
  } else {
    const { count, rows } = await goodModel.findAndCountAll({
      offset: (currentPage - 1) * pageSize,
      limit: pageSize,
      include: [{ model: goodCategoriesModel }, { model: goodImageModel }]
    })
    arr = rows.map((item) => {
      return {
        ...item.dataValues,
        good_category: item.good_category.dataValues
      }
    })
    number = count
  }

  return res.json({ code: 200, message: '成功', data: arr, count: number })
}

const getGoodsDetail = async (req, res) => {
  try {
    const result = await goodModel.findAll({
      where: { good_id: req.body.good_id },
      include: [{ model: goodCategoriesModel }]
    })
    const data = {
      ...result[0].dataValues,
      good_category: result[0].dataValues.good_category.dataValues
    }
    return res.json({ code: 200, message: '成功', data: result[0].dataValues })
  } catch (error) {
    return res.json({ code: 200, message: '失败', data: error })
  }
}

//管理员
//获取
const adminGetGood = async (req, res) => {
  try {
    const result = await goodModel.findAll({
      include: [{ model: goodCategoriesModel }]
    })

    const data = result.map((item) => {
      return item.dataValues
    })

    return res.json({ code: 2000, message: '获取商品成功', data })
  } catch (error) {
    return res.json({ code: 2001, message: '失败', data: error })
  }
}

//添加商品
const adminAddGood = async (req, res) => {
  if (addAndUpdateGoodValidate(req.body)) {
    return res.json({ code: 2002, message: '传递的数据有误' })
  }
  try {
    const result = await goodModel.create({
      good_id: uuidv4(),
      ...req.body,
      parent_category_id: req.body.good_category_id
    })

    return res.json({ code: 2000, message: '添加成功' })
  } catch (error) {
    console.log(error)
    return res.json({ code: 2001, message: '添加失败' })
  }
}

//修改商品
const adminUpdateGood = async (req, res) => {
  if (addAndUpdateGoodValidate(req.body)) {
    return res.json({ code: 2002, message: '传递的数据有误' })
  }
  try {
    const result = await goodModel.update({ ...req.body, parent_category_id: req.body.good_category_id }, { where: { good_id: req.body.good_id } })
    return result.length >= 0 ? res.json({ code: 2000, message: '修改成功' }) : res.json({ code: 2004, message: '修改失败' })
  } catch (error) {
    return res.json({ code: 2001, message: '修改失败' })
  }
}

//删除商品
const adminDelGood = async (req, res) => {
  try {
    // 检查id是否为数组
    const isBatchDelete = Array.isArray(req.body.good_id)
    // 定义删除操作
    let deleteOperation
    if (isBatchDelete) {
      // 如果是批量删除，使用in操作符
      deleteOperation = { where: { good_id: { [Op.in]: req.body.good_id } } }
      // 假设Op是从sequelize中引入的操作符
    } else {
      // 如果是单个删除，直接指定id
      deleteOperation = { where: { good_id: req.body.good_id } }
    }
    // 执行删除操作
    const result = await goodModel.destroy(deleteOperation)
    console.log(result)
    // 根据删除操作的成功与否返回不同的响应
    if (result) {
      return res.json({
        code: 2000,
        message: isBatchDelete ? '批量删除成功' : '单个删除成功'
      })
    } else {
      return res.json({ code: 2001, message: '删除失败' })
    }
  } catch (error) {
    console.error('删除过程中发生错误:', error)
    return res.json({ code: 2001, message: '删除失败' })
  }
}

//搜索功能
const adminSearchGood = async (req, res) => {
  if (!req.body.search) {
    return res.json({ code: 2003, message: '不能查询为空' })
  }
  try {
    const result = await goodModel.findAll({
      where: {
        good_name: {
          [Op.like]: `%${req.body.search}%`
        }
      },
      include: [{ model: goodCategoriesModel }, { model: goodImageModel }]
    })
    const arr = result.map((item) => item.dataValues)
    return res.json({ code: 2000, message: '搜索成功', data: arr })
  } catch (error) {
    return res.json({ code: 2001, message: '搜索失败' })
  }
}

//图片上传
const adminUploadGood = async (req, res) => {
  if (!req.file.filename) {
    return res.json({ code: 2001, message: '上传图片失败' })
  }
  return res.json({
    code: 2000,
    data: { good_image: req.file.filename },
    message: '上传图片成功'
  })
}
module.exports = {
  getGoods,
  getGoodsDetail,
  adminGetGood,
  adminAddGood,
  adminUpdateGood,
  adminDelGood,
  adminSearchGood,
  adminUploadGood
}
