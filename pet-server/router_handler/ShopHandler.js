const goodCategoriesModel = require('../model/GoodCategoriesModel')
const goodKindModel = require('../model/GoodKindModel')
const { addAndUpdateKindValidate } = require('../schema/AdminShopKind')
const { v4: uuidv4 } = require('uuid')
const { Op } = require('sequelize')
const getCategory = async (req, res) => {
  const result = await goodKindModel.findAll({
    order: [['good_kind_order', 'ASC']]
  })
  const arr = result.map((item) => item.dataValues)

  for (const element of arr) {
    const result2 = await goodCategoriesModel.findAll({
      where: { parent_category_id: element.good_kind_id },
      order: [['good_category_order', 'ASC']]
    })
    const arr2 = result2.map((item) => item.dataValues)
    if (arr2.length > 0) element.children = arr2
    else element.children = []
  }

  return res.json({ code: 200, message: '获取成功', data: arr })
}

//管理员获取所有的种类
const adminGetShopKind = async (req, res) => {
  try {
    const result = await goodKindModel.findAll({
      order: [['good_kind_order', 'ASC']]
    })
    const arr = result.map((item) => item.dataValues)
    return res.json({ code: 2000, message: '获取成功', data: arr })
  } catch (error) {
    return res.json({ code: 2001, message: '获取种类失败', data: arr })
  }
}

//管理员添加种类
const adminAddShopKind = async (req, res) => {
  if (!addAndUpdateKindValidate(req.body)) {
    return res.json({ code: 2002, message: '传递的数据有误' })
  }
  try {
    const result = await goodKindModel.create({
      good_kind_id: uuidv4(),
      ...req.body
    })
    console.log(result)
    return res.json({ code: 2000, message: '添加成功' })
  } catch (error) {
    return res.json({ code: 2001, message: '添加失败' })
  }
}

//管理员修改种类
const adminUpdateShopKind = async (req, res) => {
  if (!addAndUpdateKindValidate(req.body)) {
    return res.json({ code: 2002, message: '传递的数据有误' })
  }
  try {
    const result = await goodKindModel.update(req.body, {
      where: { good_kind_id: req.body.good_kind_id }
    })
    console.log(result)
    return res.json({ code: 2000, message: '修改成功' })
  } catch (error) {
    return res.json({ code: 2001, message: '修改失败' })
  }
}

//管理员删除种类
const adminDelShopKind = async (req, res) => {
  try {
    // 检查id是否为数组
    const isBatchDelete = Array.isArray(req.body.good_kind_id)

    // 定义删除操作
    let deleteOperation
    if (isBatchDelete) {
      // 如果是批量删除，使用in操作符
      deleteOperation = {
        where: {
          good_kind_id: {
            [Op.in]: req.body.good_kind_id // 假设Op是从sequelize中引入的操作符
          }
        }
      }
    } else {
      // 如果是单个删除，直接指定id
      deleteOperation = {
        where: {
          good_kind_id: req.body.id
        }
      }
    }

    // 执行删除操作
    const result = await goodKindModel.destroy(deleteOperation)

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

//搜索
const adminSearchShopKind = async (req, res) => {
  if (!req.body.search) {
    return res.json({ code: 2003, message: '不能查询为空' })
  }
  try {
    console.log(req.body.search)
    const result = await goodKindModel.findAll({
      where: {
        good_kind_name: {
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

module.exports = {
  getCategory,
  adminGetShopKind,
  adminAddShopKind,
  adminUpdateShopKind,
  adminDelShopKind,
  adminSearchShopKind
}
