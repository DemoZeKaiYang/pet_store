const addressModel = require('../model/AddressModel')
const userModel = require('../model/UserModel')
const { addressValidate, delAddressValidate } = require('../schema/AddressSchema')
const { v4: uuidv4 } = require('uuid')

const { Op } = require('sequelize')
addressModel.belongsTo(userModel, { foreignKey: 'user_id' })
const getAddress = async (req, res) => {
  const id = req.query.user_id
  try {
    const result = await addressModel.findAll({
      where: { user_id: id },
      order: [['address_default', 'DESC']]
    })

    const arr = result.map((item) => {
      return item.dataValues
    })

    return res.json({
      code: 1000,
      message: '获取数据成功',
      data: arr
    })
  } catch (error) {
    return res.json({
      code: 1001,
      message: '获取数据失败',
      data: {}
    })
  }
}

const addAddress = async (req, res) => {
  try {
    if (addressValidate(req.body)) {
      //如果新增的用户和修改的用户设置成默认，清除该id所有的地址默认，再重新设置
      if (req.body.address_default === 1) {
        await addressModel.update({ address_default: 0 }, { where: { user_id: req.body.user_id } })
      }

      if (req.body.address_id) {
        //修改地址
        const updateResult = await addressModel.update({ ...req.body }, { where: { address_id: req.body.address_id } })
        return res.json({ code: 200, message: '修改成功' })
      } else {
        //添加地址
        const addResult = await addressModel.create({
          ...req.body,
          address_id: uuidv4()
        })
        return res.json({ code: 200, message: '添加地址成功' })
      }
    }
    return res.json({ code: 201, message: '数据格式错误' })
  } catch (error) {
    return res.json({ code: 1003, message: '添加地址失败,请检查' })
  }
}

//打个bug需要增加删除默认地址
const delAddress = async (req, res) => {
  //删除
  if (delAddressValidate(req.body)) {
    const result = await addressModel.destroy({
      where: { address_id: req.body.address_id }
    })
    if (result > 0) {
      return res.json({ code: 200, message: '删除成功', data: {} })
    } else {
      return res.json({ code: 201, message: '删除失败', data: {} })
    }
  }
  return res.json({ code: 203, message: 'address_id错误', data: {} })
}

//获取默认地址
const getDefaultAddress = async (req, res) => {
  //没有携带id，返回错误信息
  if (!req.query)
    return res.json({
      code: 1001,
      message: '获取默认地址失败,没有提供用户的唯一标识',
      data: {}
    })

  //通过id查询默认地址
  try {
    const result = await addressModel.findOne({
      where: {
        user_id: req.query.user_id
      }
    })
    const data = result.dataValues
    return res.json({ code: 1000, message: '获取默认地址成功', data })
  } catch (error) {
    return res.json({ code: 1003, message: error, data: {} })
  }
}

const getAddressAdmin = async (req, res) => {
  try {
    const result = await addressModel.findAll({
      order: [['address_name', 'DESC']],
      include: [{ model: userModel, attributes: ['user_name'] }]
    })
    const data = result.map((item) => {
      return item.dataValues
    })
    return res.json({ code: 2000, message: '获取数据成功', data })
  } catch (error) {}
  return res.json({ code: 2001, message: '获取数据成功' })
}

const AdminSearchAddress = async (req, res) => {
  if (!req.body.search) return res.json({ code: 2003, message: '不能查询为空' })
  try {
    const result = await addressModel.findAll({
      where: { address_name: { [Op.like]: `%${req.body.search}%` } },
      order: [['address_default', 'DESC']],
      include: [{ model: userModel, attributes: ['user_name'] }]
    })
    const arr = result.map((item) => item.dataValues)
    return res.json({ code: 2000, message: '获取成功', data: arr })
  } catch (error) {
    console.log(error)
    return res.json({ code: 2001, message: '获取收件人地址姓名失败' })
  }
}

const AdminDelAddress = async (req, res) => {
  try {
    // 检查id是否为数组
    const isBatchDelete = Array.isArray(req.body.address_id)
    // 定义删除操作
    let deleteOperation
    if (isBatchDelete) {
      // 如果是批量删除，使用in操作符
      deleteOperation = { where: { address_id: { [Op.in]: req.body.address_id } } }
      // 假设Op是从sequelize中引入的操作符
    } else {
      // 如果是单个删除，直接指定id
      deleteOperation = { where: { address_id: req.body.address_id } }
    }
    // 执行删除操作
    const result = await addressModel.destroy(deleteOperation)

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

//修改地址
const AdminUpdateAddress = async (req, res) => {
  if (!addressValidate(req.body)) {
    return res.json({ code: 2002, message: '传递的数据有误' })
  }
  try {
    console.log(req.body)
    //修改默认地址
    if (req.body.address_default === 1) {
      await addressModel.update({ address_default: 0 }, { where: { user_id: req.body.user_id } })
      const result = await addressModel.update(req.body, { where: { address_id: req.body.address_id } })
      return result.length >= 0 ? res.json({ code: 2000, message: '修改成功' }) : res.json({ code: 2004, message: '修改失败' })
    } else {
      const result = await addressModel.update(req.body, { where: { address_id: req.body.address_id } })
      return result.length >= 0 ? res.json({ code: 2000, message: '修改成功' }) : res.json({ code: 2004, message: '修改失败' })
    }
  } catch (error) {
    console.log(error)
    return res.json({ code: 2001, message: '修改失败' })
  }
}
module.exports = {
  getAddress,
  addAddress,
  delAddress,
  getDefaultAddress,
  getAddressAdmin,
  AdminSearchAddress,
  AdminDelAddress,
  AdminUpdateAddress
}
