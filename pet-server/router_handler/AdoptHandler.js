const adoptModel = require('../model/AdoptModel')
const applyModel = require('../model/ApplyModel')
const { v4: uuidv4 } = require('uuid')
const { Op } = require('sequelize')
const getAdopt = async (req, res) => {
  try {
    const result = await adoptModel.findAll()
    const data = result.map((item) => item.dataValues)
    return res.json({ code: 2000, message: '获取成功', data })
  } catch (error) {
    console.log(error)
    return res.json({ code: 2001, message: '获取失败,数据库问题' })
  }
}
const getAdoptOne = async (req, res) => {
  const { adopt_id } = req.body
  if (!adopt_id) return res.json({ code: 2002, message: '没有传递ID', data })
  try {
    const result = await adoptModel.findAll({
      where: {
        adopt_id
      }
    })
    const data = result.map((item) => item.dataValues)
    return res.json({ code: 2000, message: '获取成功', data: data[0] })
  } catch (error) {
    console.log(error)
    return res.json({ code: 2001, message: '获取失败,数据库问题' })
  }
}
const applyAdopt = async (req, res) => {
  if (Object.keys(req.body).length === 0) return res.json({ code: 2002, message: '没有传递数据' })

  try {
    const result = await applyModel.create({ ...req.body, apply_id: uuidv4() })

    return res.json({ code: 2000, message: '申请成功' })
  } catch (error) {
    console.log(error)
    return res.json({ code: 2001, message: '数据库' })
  }
}

const AdminSearchAdopt = async (req, res) => {
  if (!req.body.search) return res.json({ code: 2003, message: '不能查询为空' })

  try {
    const result = await adoptModel.findAll({ where: { adopt_name: { [Op.like]: `%${req.body.search}%` } } })
    console.log(result)
    const arr = result.map((item) => item.dataValues)
    return res.json({ code: 2000, message: '获取成功', data: arr })
  } catch (error) {
    console.log(error)
    return res.json({ code: 2001, message: '获取宠物失败' })
  }
}
const AdminAddAdopt = async (req, res) => {
  try {
    const result = await adoptModel.create({
      adopt_id: uuidv4(),
      ...req.body
    })
    return res.json({ code: 2000, message: '添加成功' })
  } catch (error) {
    console.log(error)
    return res.json({ code: 2001, message: '添加失败' })
  }
}

const adminDelAdopt = async (req, res) => {
  try {
    // 检查id是否为数组
    const isBatchDelete = Array.isArray(req.body.adopt_id)
    // 定义删除操作
    let deleteOperation
    deleteOperation = isBatchDelete ? { where: { adopt_id: { [Op.in]: req.body.adopt_id } } } : { where: { adopt_id: req.body.adopt_id } }
    // 执行删除操作
    const result = await adoptModel.destroy(deleteOperation)
    // 根据删除操作的成功与否返回不同的响应
    return result ? res.json({ code: 2000, message: isBatchDelete ? '批量删除成功' : '单个删除成功' }) : res.json({ code: 2001, message: '删除失败' })
  } catch (error) {
    console.error('删除过程中发生错误:', error)
    return res.json({ code: 2001, message: '删除失败' })
  }
}

const adminUpdateAdopt = async (req, res) => {
  try {
    const result = await adoptModel.update(req.body, { where: { adopt_id: req.body.adopt_id } })
    return result.length >= 0 ? res.json({ code: 2000, message: '修改成功' }) : res.json({ code: 2004, message: '修改失败' })
  } catch (error) {
    console.log(error)
    return res.json({ code: 2001, message: '修改失败' })
  }
}
module.exports = {
  getAdopt,
  getAdoptOne,
  applyAdopt,
  AdminSearchAdopt,
  AdminAddAdopt,
  adminDelAdopt,
  adminUpdateAdopt
}
