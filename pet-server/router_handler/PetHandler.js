const petKindModel = require('../model/PetKindModel')
const petModel = require('../model/PetModel')
const userModel = require('../model/UserModel')
const { petsValidate, delPetsValidate } = require('../schema/PetSchema')
const { v4: uuidv4 } = require('uuid')
const { Op } = require('sequelize')

petModel.belongsTo(petKindModel, { foreignKey: 'pet_kind_id' })
petModel.belongsTo(userModel, { foreignKey: 'user_id' })
//获取用户对应的宠物
const getPets = async (req, res) => {
  const id = req.query.user_id
  const { count, rows } = await petModel.findAndCountAll({
    where: { user_id: id }
  })
  let arr = []
  for (let i = 0; i < parseInt(count / 4) + 1; i++) {
    let arr2 = []
    for (let j = i * 4; j < 4 * (i + 1) && j < count; j++) {
      arr2.push(rows[j].dataValues)
    }
    if (arr2.length > 0) arr.push(arr2)
  }

  return res.json({
    code: 200,
    message: '获取数据成功',
    data: arr
  })
}
const uploadsPetImage = async (req, res) => {
  res.json({
    code: 200,
    data: {
      pet_avatar: req.file.filename
    },
    message: '上传成功'
  })
}

//添加或修改
const addOrUpdatePets = async (req, res) => {
  if (!petsValidate(req.body)) return res.json({ code: 201, message: '数据格式错误', data: {} })

  //修改
  if (req.body.pet_id && req.body.pet_id !== '') {
    try {
      const result = await petModel.update(req.body, {
        where: { pet_id: req.body.pet_id }
      })
      return res.json({ code: 200, message: '修改成功', data: {} })
    } catch (error) {
      return res.status.json({ code: 401, message: '修改报错了', data: {} })
    }
  } else {
    try {
      const result = await petModel.create({ ...req.body, pet_id: uuidv4() })
      return res.json({
        code: 200,
        message: '修改成功',
        data: result.dataValues
      })
    } catch (error) {
      return res.json({ code: 401, message: '添加报错了', data: {} })
    }
  }
}
//删除
const delPets = async (req, res) => {
  if (!delPetsValidate(req.body)) return res.json({ code: 201, message: '数据格式错误', data: {} })
  try {
    const result = await petModel.destroy({ where: { pet_id: req.body.pet_id } })
    return res.json({ code: 200, message: '删除成功', data: {} })
  } catch (error) {
    return res.json({ code: 202, message: '删除报错,失败', data: {} })
  }
}

//管理员操作数据

//获取所有宠物
const adminGetPet = async (req, res) => {
  try {
    const result = await petModel.findAll({ include: [{ model: petKindModel }, { model: userModel }] })
    const data = result.map((item) => {
      return item.dataValues
    })
    return res.json({ code: 2000, message: '获取宠物成功', data })
  } catch (error) {
    return res.json({ code: 2001, message: '获取宠物失败', data: error })
  }
}
const adminAddPet = async (req, res) => {}

//修改
const adminUpdatePet = async (req, res) => {
  if (!petsValidate(req.body)) {
    return res.json({ code: 2002, message: '传递的数据有误' })
  }
  try {
    const result = await petModel.update(req.body, { where: { pet_id: req.body.pet_id } })
    return result.length >= 0 ? res.json({ code: 2000, message: '修改成功' }) : res.json({ code: 2004, message: '修改失败' })
  } catch (error) {
    console.log(error)
    return res.json({ code: 2001, message: '修改失败' })
  }
}
const adminDelPet = async (req, res) => {
  try {
    // 检查id是否为数组
    const isBatchDelete = Array.isArray(req.body.pet_id)
    // 定义删除操作
    let deleteOperation
    deleteOperation = isBatchDelete ? { where: { pet_id: { [Op.in]: req.body.pet_id } } } : { where: { pet_id: req.body.pet_id } }
    // 执行删除操作
    const result = await petModel.destroy(deleteOperation)
    // 根据删除操作的成功与否返回不同的响应
    return result ? res.json({ code: 2000, message: isBatchDelete ? '批量删除成功' : '单个删除成功' }) : res.json({ code: 2001, message: '删除失败' })
  } catch (error) {
    console.error('删除过程中发生错误:', error)
    return res.json({ code: 2001, message: '删除失败' })
  }
}
const adminSearchPet = async (req, res) => {
  if (!req.body.search) return res.json({ code: 2003, message: '不能查询为空' })
  try {
    const result = await petModel.findAll({ where: { pet_name: { [Op.like]: `%${req.body.search}%` } } })
    const arr = result.map((item) => item.dataValues)
    return res.json({ code: 2000, message: '获取成功', data: arr })
  } catch (error) {
    console.log(error)
    return res.json({ code: 2001, message: '获取宠物失败' })
  }
}
const adminUploadPet = async (req, res) => {
  if (!req.file.filename) {
    return res.json({ code: 2001, message: '上传图片失败' })
  }
  return res.json({
    code: 2000,
    data: { pet_avatar: req.file.filename },
    message: '上传图片成功'
  })
}

module.exports = {
  getPets,
  uploadsPetImage,
  addOrUpdatePets,
  delPets,
  adminGetPet,
  adminAddPet,
  adminUpdatePet,
  adminDelPet,
  adminSearchPet,
  adminUploadPet
}
