const applyModel = require('../model/ApplyModel')
const { v4: uuidv4 } = require('uuid')
const { Op } = require('sequelize')
const userModel = require('../model/UserModel')
const adoptModel = require('../model/AdoptModel')
applyModel.belongsTo(userModel, { foreignKey: 'user_id' })
applyModel.belongsTo(adoptModel, { foreignKey: 'adopt_id' })
const getApply = async (req, res) => {
  try {
    const result = await applyModel.findAll({
      include: [{ model: userModel }]
    })
    const data = result.map((item) => item.dataValues)
    return res.json({ code: 2000, message: '获取成功', data })
  } catch (error) {
    console.log(error)
    return res.json({ code: 2001, message: '获取失败,数据库问题' })
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
const AdminUpdateApply = async (req, res) => {
  if (!req.body) return res.json({ code: 2003, message: '不能为空' })
  console.log(req.body)
  const { apply_id, status } = req.body
  try {
    const result = await applyModel.update({ status }, { where: { apply_id } })
    return result.length >= 0 ? res.json({ code: 2000, message: '修改成功' }) : res.json({ code: 2004, message: '修改失败' })
  } catch (error) {
    console.log(error)
    return res.json({ code: 2001, message: '数据库失败' })
  }
}

//用户获取申请订单状态
const getAdoptApply = async (req, res) => {
  const { user_id } = req.body
  try {
    const result = await applyModel.findAll({
      where: {
        user_id
      },
      include: [{ model: adoptModel }]
    })
    const arr = result.map((item) => item.dataValues)
    return res.json({ code: 2000, message: '获取成功', data: arr })
  } catch (error) {
    console.log(error)
    return res.json({ code: 2001, message: '数据库失败' })
  }
}
module.exports = {
  getApply,
  AdminUpdateApply,
  AdminSearchAdopt,
  getAdoptApply
}
