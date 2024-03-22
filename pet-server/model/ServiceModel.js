//地址表的模型
const { DataTypes } = require('sequelize')
const { sequelize } = require('../db/index')

//用户表模型
const serviceModel = sequelize.define(
  'services',
  {
    service_id: {
      type: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    service_name: {
      type: DataTypes.STRING
    },
    service_type_id: {
      type: DataTypes.STRING
    },

    service_image: {
      type: DataTypes.STRING
    },
    service_order: {
      type: DataTypes.INTEGER
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
