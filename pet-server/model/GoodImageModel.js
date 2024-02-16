//地址表的模型
const { DataTypes } = require('sequelize')
const { sequelize } = require('../db/index')
const goodModel = require('./GoodModel')

//用户表模型
const goodImageModel = sequelize.define(
  'good_images',
  {
    good_image_id: {
      type: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    good_image_url: {
      type: DataTypes.STRING
    },
    good_id: {
      type: DataTypes.STRING,
      references: {
        model: goodModel, // 这里指定外键所引用的模型
        key: 'good_id' // 这里指定外键所引用的模型的主键
      }
    },
    good_image_type: {
      type: DataTypes.INTEGER
    },
    good_image_order: {
      type: DataTypes.INTEGER
    }
  },
  {
    // 这是其他模型参数
    sequelize,
    modelName: 'good_images',
    timestamps: true,
    createdAt: false,
    updatedAt: false,
    freezeTableName: true
  }
)
module.exports = goodImageModel
