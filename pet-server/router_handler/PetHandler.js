const petModel = require('../model/PetModel')
const { petsValidate, delPetsValidate } = require('../schema/PetSchema')
const { v4: uuidv4 } = require('uuid')

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
      console.log(`output->result`, result)
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
    const result = await petModel.destroy({
      where: { pet_id: req.body.pet_id }
    })
    return res.json({ code: 200, message: '删除成功', data: {} })
  } catch (error) {
    return res.json({ code: 202, message: '删除报错,失败', data: {} })
  }
}
module.exports = {
  getPets,
  uploadsPetImage,
  addOrUpdatePets,
  delPets
}
