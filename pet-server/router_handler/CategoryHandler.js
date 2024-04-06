const goodCategoriesModel = require('../model/GoodCategoriesModel')
const goodKindModel = require('../model/GoodKindModel')
const { Op } = require('sequelize')

const { v4: uuidv4 } = require('uuid')
goodCategoriesModel.belongsTo(goodKindModel, { foreignKey: 'parent_category_id' })

const { addAndUpdateCategoryValidate } = require('../schema/AdminShopCategory')

const adminGetShopCategory = async (req, res) => {
  try {
    const result = await goodCategoriesModel.findAll({
      order: [['good_category_order', 'ASC']],
      include: [{ model: goodKindModel, attributes: ['good_kind_name'] }]
    })

    const arr = result.map((item) => {
      const good_kind_name = item.dataValues.good_kind.dataValues.good_kind_name
      const good_kind = item.dataValues.good_kind.dataValues
      return { ...item.dataValues, good_kind_name, good_kind }
    })
    return res.json({ code: 2000, message: '获取成功', data: arr })
  } catch (error) {
    console.log(error)
    return res.json({ code: 2001, message: '获取种类失败' })
  }
}
const adminAddShopCategory = async (req, res) => {
  if (addAndUpdateCategoryValidate(req.body)) {
    return res.json({ code: 2002, message: '传递的数据有误' })
  }
  try {
    const result = await goodCategoriesModel.create({
      good_category_id: uuidv4(),
      ...req.body,
      parent_category_id: req.body.good_kind_id
    })

    return res.json({ code: 2000, message: '添加成功' })
  } catch (error) {
    console.log(error)
    return res.json({ code: 2001, message: '添加失败' })
  }
}
const adminUpdateShopCategory = async (req, res) => {
  if (addAndUpdateCategoryValidate(req.body)) {
    return res.json({ code: 2002, message: '传递的数据有误' })
  }
  try {
    const result = await goodCategoriesModel.update(
      { ...req.body, parent_category_id: req.body.good_kind_id },
      { where: { good_category_id: req.body.good_category_id } }
    )

    return result.length >= 0 ? res.json({ code: 2000, message: '修改成功' }) : res.json({ code: 2004, message: '修改失败' })
  } catch (error) {
    return res.json({ code: 2001, message: '修改失败' })
  }
}

const adminSearchShopCategory = async (req, res) => {
  if (!req.body.search) {
    return res.json({ code: 2003, message: '不能查询为空' })
  }
  try {
    const result = await goodCategoriesModel.findAll({
      where: {
        good_category_name: {
          [Op.like]: `%${req.body.search}%`
        }
      }
    })
    const arr = result.map((item) => item.dataValues)
    return res.json({ code: 2000, message: '获取成功', data: arr })
  } catch (error) {
    return res.json({ code: 2001, message: '获取种类失败' })
  }
}

//上传商品分类图片
const adminUploadShopCategory = async (req, res) => {
  if (!req.file.filename) {
    return res.json({ code: 2001, message: '上传图片失败' })
  }
  return res.json({
    code: 2000,
    data: { good_category_image: req.file.filename },
    message: '上传图片成功'
  })
}

const adminDelShopCategory = async (req, res) => {
  try {
    // 检查id是否为数组
    const isBatchDelete = Array.isArray(req.body.good_category_id)
    // 定义删除操作
    let deleteOperation
    if (isBatchDelete) {
      // 如果是批量删除，使用in操作符
      deleteOperation = {
        where: {
          good_category_id: {
            [Op.in]: req.body.good_category_id // 假设Op是从sequelize中引入的操作符
          }
        }
      }
    } else {
      // 如果是单个删除，直接指定id
      deleteOperation = {
        where: {
          good_category_id: req.body.good_category_id
        }
      }
    }

    // 执行删除操作
    const result = await goodCategoriesModel.destroy(deleteOperation)

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

module.exports = {
  adminGetShopCategory,
  adminAddShopCategory,
  adminUpdateShopCategory,
  adminDelShopCategory,
  adminSearchShopCategory,
  adminUploadShopCategory
}
