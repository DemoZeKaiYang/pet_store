const petKindModel = require('../model/PetKindModel')
const getKinds = async (req, res) => {
  const result = await petKindModel.findAll()
  const arr = result.map((item) => {
    return item.dataValues
  })
  return res.json({
    code: 200,
    message: '获取数据成功',
    data: arr
  })
}

module.exports = {
  getKinds
}
