const addressModel = require('../model/AddressModel')
const userModel = require('../model/UserModel')
const { v4: uuidv4 } = require('uuid')
const articleModel = require('../model/ArticleModel')
const { Op } = require('sequelize')
addressModel.belongsTo(userModel, { foreignKey: 'user_id' })


const getArticleAdmin = async (req, res) => {
  try {
    const result = await articleModel.findAll()
    const arr = result.map((item) => item.dataValues)
    return res.json({ code: 2000, message: '获取数据成功', data: arr })
  } catch (error) {
    console.log(error)
    return res.json({ code: 2001, message: '获取数据失败' })
  }
}


//搜索文章标题
const AdminSearchArticle = async (req, res) => {
  if (!req.body.search) return res.json({ code: 2003, message: '不能查询为空' })
  try {
    const result = await articleModel.findAll({
      where: { article_title: { [Op.like]: `%${req.body.search}%` } }
    })
    const arr = result.map((item) => item.dataValues)
    return res.json({ code: 2000, message: '获取成功', data: arr })
  } catch (error) {
    console.log(error)
    return res.json({ code: 2001, message: '获取收件人地址姓名失败' })
  }
}
const AdminAddArticle = async (req, res) => {
  if (Object.keys(req.body).length === 0) {
    return res.json({ code: 2002, message: '传递的数据有误' })
  }
  try {
    const result = await articleModel.create({
      ...req.body,
      article_id: uuidv4()
    })
    return res.json({ code: 2000, message: '添加成功' })
  } catch (error) {
    console.log(error)
    return res.json({ code: 2001, message: '修改失败' })
  }
}
const AdminDelArticle = async (req, res) => {
  try {
    // 检查id是否为数组
    const isBatchDelete = Array.isArray(req.body.article_id)
    // 定义删除操作
    let deleteOperation
    if (isBatchDelete) {
      // 如果是批量删除，使用in操作符
      deleteOperation = { where: { article_id: { [Op.in]: req.body.article_id } } }
      // 假设Op是从sequelize中引入的操作符
    } else {
      // 如果是单个删除，直接指定id
      deleteOperation = { where: { article_id: req.body.article_id } }
    }
    // 执行删除操作
    const result = await articleModel.destroy(deleteOperation)

    // 根据删除操作的成功与否返回不同的响应
    if (result) {
      return res.json({
        code: 2000,
        message: isBatchDelete ? '批量删除成功' : '单个删除成功'
      })
    } else {
      return res.json({ code: 2001, message: '删除失败' })
    }
  } catch (e) {
    console.log(e)
    return res.json({ code: 2001, message: '删除失败' })
  }
}
const AdminUpdateArticle = async (req, res) => {
  try {
    const result = await articleModel.update(req.body, { where: { article_id: req.body.article_id } })
    return result.length >= 0 ? res.json({ code: 2000, message: '修改成功' }) : res.json({
      code: 2004,
      message: '修改失败'
    })
  } catch (error) {
    console.log(error)
    return res.json({ code: 2001, message: '修改失败' })
  }
}
const uploadArticle = async (req, res) => {
  if (!req.file.filename) {
    return res.json({
      'errno': 1, // 只要不等于 0 就行
      'message': '上传图片失败'
    })
  }

  return res.json({
    'errno': 0, // 注意：值是数字，不能是字符串
    'data': {
      url: 'http://192.168.6.4:9000/article_uploads/' + req.file.filename // 图片 src ，必须
    }
  })
}


const  getArticleContent=async(req,res)=>{

  try {
    const {article_id}=req.body
    const result = await articleModel.findAll({where:{article_id}})
    const arr = result.map((item) => item.dataValues)
    return res.json({ code: 2000, message: '获取数据成功', data: arr })
  } catch (error) {
    console.log(error)
    return res.json({ code: 2001, message: '获取数据失败' })
  }
}
module.exports = {
  getArticleAdmin,
  uploadArticle,
  AdminSearchArticle,
  AdminAddArticle,
  AdminDelArticle,
  AdminUpdateArticle,
  getArticleContent
}
