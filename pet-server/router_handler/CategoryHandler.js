const goodCategoriesModel = require('../model/GoodCategoriesModel')
const goodKindModel = require('../model/GoodKindModel')

goodCategoriesModel.belongsTo(goodKindModel, { foreignKey: 'parent_category_id' })
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
const adminAddShopCategory = async (req, res) => {}
const adminUpdateShopCategory = async (req, res) => {}
const adminDelShopCategory = async (req, res) => {}
const adminSearchShopCategory = async (req, res) => {}

//上传商品分类图片
const adminUploadShopCategory = async (req, res) => {
  console.log(req.body)
  if (req.file.filename) {
    return res.json({
      code: 2001,
      message: '上传图片失败'
    })
  }
  return res.json({
    code: 2000,
    data: { good_category_image: req.file.filename },
    message: '上传图片成功'
  })
}
module.exports = {
  adminGetShopCategory,
  adminAddShopCategory,
  adminUpdateShopCategory,
  adminDelShopCategory,
  adminSearchShopCategory,
  adminUploadShopCategory
}
