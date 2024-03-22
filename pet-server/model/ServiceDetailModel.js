//地址表的模型
const { DataTypes } = require('sequelize')
const { sequelize } = require('../db/index')

//用户表模型
const serviceModel = sequelize.define(
  'services',
  {
    service_detail_id: {
      type: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    service_name: {
      type: DataTypes.STRING
    },
    service_price: {
      type: DataTypes.DOUBLE
    },
    service_detail_describe: {
      type: DataTypes.STRING
    },
    service_id: {
      type: DataTypes.INTEGER
    },
    service_image_id: {
      type: DataTypes.STRING
    }
  },
  {
    // 这是其他模型参数
    sequelize,
    modelName: 'services',
    timestamps: true,
    createdAt: false,
    updatedAt: false,
    freezeTableName: true
  }
)
module.exports = serviceModel
