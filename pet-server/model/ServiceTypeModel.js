//地址表的模型
const { DataTypes } = require('sequelize')
const { sequelize } = require('../db/index')

//用户表模型
const serviceTypeModel = sequelize.define(
  'service_types',
  {
    service_type_id: {
      type: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    service_type_name: {
      type: DataTypes.STRING
    },
    service_type_order: {
      type: DataTypes.INTEGER
    }
  },
  {
    // 这是其他模型参数
    sequelize,
    modelName: 'service_types',
    timestamps: true,
    createdAt: false,
    updatedAt: false,
    freezeTableName: true
  }
)
module.exports = serviceTypeModel
