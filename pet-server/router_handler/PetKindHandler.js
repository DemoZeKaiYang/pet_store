const petKindModel = require('../model/PetKindModel')
const getKinds = async (req, res) => {
  try {
    const result = await petKindModel.findAll()
    const arr = result.map((item) => {
      return item.dataValues
    })
    return res.json({ code: 2000, message: '获取数据成功', data: arr })
  } catch (error) {
    return res.json({ code: 2001, message: '获取宠物种类失败,数据库问题' })
  }
}

module.exports = {
  getKinds
}
