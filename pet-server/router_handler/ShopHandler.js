const goodCategoriesModel = require('../model/GoodCategoriesModel')
const goodKindModel = require('../model/GoodKindModel')

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
module.exports = {
  getCategory
}
