//地址表的模型
const { DataTypes } = require('sequelize')
const { sequelize } = require('../db/index')
const userModel = require('./UserModel')
//用户表模型
const addressModel = sequelize.define(
  'address',
  {
    address_id: {
      type: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    address_phone: {
      type: DataTypes.STRING
    },
    address_area: {
      type: DataTypes.STRING
    },
    address_details: {
      type: DataTypes.STRING
    },
    address_name: {
      type: DataTypes.STRING
    },
    address_default: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    user_id: {
      type: DataTypes.UUIDV4,
      allowNull: false,
      references: {
        model: userModel, // 这里指定外键所引用的模型
        key: 'user_id' // 这里指定外键所引用的模型的主键
      }
    }
  },
  {
    // 这是其他模型参数
    sequelize,
    modelName: 'address',
    timestamps: true,
    createdAt: false,
    updatedAt: false,
    freezeTableName: true
  }
)
module.exports = addressModel
