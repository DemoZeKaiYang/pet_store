//地址表的模型
const { DataTypes } = require('sequelize')
const { sequelize } = require('../db/index')
const goodKindModel = require('./GoodKindModel')

//用户表模型
const goodCategoriesModel = sequelize.define(
  'good_categories',
  {
    good_category_id: {
      type: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    good_category_name: {
      type: DataTypes.STRING
    },
    level: {
      type: DataTypes.STRING
    },
    parent_category_id: {
      type: DataTypes.STRING,
      references: {
        model: goodKindModel, // 这里指定外键所引用的模型
        key: 'good_kind_id' // 这里指定外键所引用的模型的主键
      }
    },
    good_category_order: {
      type: DataTypes.INTEGER
    },
    good_category_image: {
      type: DataTypes.STRING
    },
    good_category_display: {
      type: DataTypes.INTEGER
    }
  },
  {
    // 这是其他模型参数
    sequelize,
    modelName: 'good_categories',
    timestamps: true,
    createdAt: false,
    updatedAt: false,
    freezeTableName: true
  }
)
module.exports = goodCategoriesModel
