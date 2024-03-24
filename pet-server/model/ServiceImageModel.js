//地址表的模型
const { DataTypes } = require('sequelize')
const { sequelize } = require('../db/index')

//用户表模型
const serviceImageModel = sequelize.define(
  'service_images',
  {
    service_image_id: {
      type: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    service_image_name: {
      type: DataTypes.STRING
    },
    service_image_type: {
      type: DataTypes.STRING
    },
    service_image_order: {
      type: DataTypes.STRING
    },
    service_detail_id: {
      type: DataTypes.INTEGER
    }
  },
  {
    // 这是其他模型参数
    sequelize,
    modelName: 'service_images',
    timestamps: true,
    createdAt: false,
    updatedAt: false,
    freezeTableName: true
  }
)
module.exports = serviceImageModel
