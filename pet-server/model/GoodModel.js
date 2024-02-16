//地址表的模型
const { DataTypes } = require('sequelize')
const { sequelize } = require('../db/index')

//用户表模型
const goodModel = sequelize.define(
  'goods',
  {
    good_id: {
      type: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    good_name: {
      type: DataTypes.STRING
    },
    good_price: {
      type: DataTypes.STRING
    },
    good_origin_price: {
      type: DataTypes.STRING
    },
    good_comment_num: {
      type: DataTypes.INTEGER
    },
    good_sold_num: {
      type: DataTypes.INTEGER
    },
    parent_category_id: {
      type: DataTypes.INTEGER
    },
    good_image: {
      type: DataTypes.STRING
    }
  },
  {
    // 这是其他模型参数
    sequelize,
    modelName: 'goods',
    timestamps: true,
    createdAt: false,
    updatedAt: false,
    freezeTableName: true
  }
)

module.exports = goodModel
