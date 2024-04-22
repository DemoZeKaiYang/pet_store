//地址表的模型
const { DataTypes } = require('sequelize')
const { sequelize } = require('../db/index')
const userModel = require('./UserModel')
//用户表模型
const articleModel = sequelize.define(
  'articles',
  {
    article_id: {
      type: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    article_content: {
      type: DataTypes.TEXT
    },
    article_date: {
      type: DataTypes.DATEONLY
    },
    article_image: {
      type: DataTypes.STRING
    },
    article_title: {
      type: DataTypes.STRING
    }
  },
  {
    // 这是其他模型参数
    sequelize,
    modelName: 'articles',
    timestamps: true,
    createdAt: false,
    updatedAt: false,
    freezeTableName: true
  }
)
module.exports = articleModel
