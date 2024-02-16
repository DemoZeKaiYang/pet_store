//地址表的模型
const { DataTypes } = require('sequelize')
const { sequelize } = require('../db/index')

//用户表模型
const goodKindModel = sequelize.define(
  'good_kinds',
  {
    good_kind_id: {
      type: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    good_kind_name: {
      type: DataTypes.STRING
    },
    level: {
      type: DataTypes.STRING
    },
    parent_category_id: {
      type: DataTypes.STRING
    },
    good_kind_order: {
      type: DataTypes.INTEGER
    },
    good_display: {
      type: DataTypes.INTEGER
    }
  },
  {
    // 这是其他模型参数
    sequelize,
    modelName: 'good_kinds',
    timestamps: true,
    createdAt: false,
    updatedAt: false,
    freezeTableName: true
  }
)
module.exports = goodKindModel
