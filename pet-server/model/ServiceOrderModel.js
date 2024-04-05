//地址表的模型
const { DataTypes } = require('sequelize')
const { sequelize } = require('../db/index')
const userModel = require('./UserModel')

//用户表模型
const serviceOrderModel = sequelize.define(
  'service_orders',
  {
    service_order_id: {
      type: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    service_id: {
      type: DataTypes.UUIDV4
    },
    service_name: {
      type: DataTypes.STRING
    },
    service_price: {
      type: DataTypes.DOUBLE
    },
    service_time: {
      type: DataTypes.DATE
    },
    service_number: {
      type: DataTypes.INTEGER
    },
    service_date: {
      type: DataTypes.DATE
    },
    service_address_name: {
      type: DataTypes.STRING
    },
    service_address_phone: {
      type: DataTypes.STRING
    },
    service_address: {
      type: DataTypes.STRING
    },
    service_status: {
      type: DataTypes.INTEGER
    },
    user_id: {
      type: DataTypes.STRING,
      references: {
        model: userModel, // 这里指定外键所引用的模型
        key: 'user_id' // 这里指定外键所引用的模型的主键
      }
    },
    service_image: {
      type: DataTypes.STRING
    }
  },
  {
    // 这是其他模型参数
    sequelize,
    modelName: 'service_orders',
    timestamps: true,
    createdAt: false,
    updatedAt: false,
    freezeTableName: true
  }
)
module.exports = serviceOrderModel
