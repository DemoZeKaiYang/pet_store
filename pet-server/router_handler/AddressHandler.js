const addressModel = require('../model/AddressModel')
const userModel = require('../model/UserModel')
const {
  addressValidate,
  delAddressValidate
} = require('../schema/AddressSchema')
const { v4: uuidv4 } = require('uuid')

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
        await addressModel.update(
          { address_default: 0 },
          { where: { user_id: req.body.user_id } }
        )
      }

      if (req.body.address_id) {
        //修改地址
        const updateResult = await addressModel.update(
          { ...req.body },
          { where: { address_id: req.body.address_id } }
        )
        return res.json({ code: 200, message: '修改成功', data: {} })
      } else {
        //添加地址
        const updateResult = await addressModel.create({
          ...req.body,
          address_id: uuidv4()
        })
        return res.json({ code: 200, message: '添加地址成功', data: {} })
      }
    }
    return res.json({ code: 201, message: '数据格式错误', data: {} })
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

module.exports = {
  getAddress,
  addAddress,
  delAddress,
  getDefaultAddress
}
