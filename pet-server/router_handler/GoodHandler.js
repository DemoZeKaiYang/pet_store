const goodCategoriesModel = require('../model/GoodCategoriesModel')
const goodImageModel = require('../model/GoodImageModel')
const goodModel = require('../model/GoodModel')

goodModel.hasMany(goodImageModel, { foreignKey: 'good_id' })

goodModel.belongsTo(goodCategoriesModel, { foreignKey: 'parent_category_id' })
const { Op } = require('sequelize')
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
      include: [{ model: goodCategoriesModel }, { model: goodImageModel }]
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

const adminGetGood = async (req, res) => {
  try {
    const result = await goodModel.findAll({
      include: [{ model: goodCategoriesModel }, { model: goodImageModel }]
    })
    console.log(result)
    const data = result.map((item) => {
      return item.dataValues
    })

    return res.json({ code: 2000, message: '获取商品成功', data })
  } catch (error) {
    return res.json({ code: 2001, message: '失败', data: error })
  }
}
const adminAddGood = async (req, res) => {}
const adminUpdateGood = async (req, res) => {}
const adminDelGood = async (req, res) => {}

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
const adminUploadGood = async (req, res) => {}
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
