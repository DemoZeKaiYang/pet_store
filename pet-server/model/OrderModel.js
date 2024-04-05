//地址表的模型
const { DataTypes } = require('sequelize')
const { sequelize } = require('../db/index')
const userModel = require('./UserModel')

//用户表模型
const orderModel = sequelize.define(
  'orders',
  {
    order_id: {
      type: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.UUIDV4,
      allowNull: false,
      references: {
        model: userModel, // 这里指定外键所引用的模型
        key: 'user_id' // 这里指定外键所引用的模型的主键
      }
    },
    order_status: {
      type: DataTypes.INTEGER
    },
    create_date: {
      type: DataTypes.DATE
    },
    shipping_address: {
      type: DataTypes.STRING
    },
    payment_method: {
      type: DataTypes.INTEGER
    },
    order_number: {
      type: DataTypes.STRING
    },
    address_name: {
      type: DataTypes.STRING
    },
    address_number: {
      type: DataTypes.STRING
    },
    order_price: {
      type: DataTypes.DOUBLE
    }
  },
  {
    // 这是其他模型参数
    sequelize,
    modelName: 'orders',
    timestamps: true,
    createdAt: false,
    updatedAt: false,
    freezeTableName: true
  }
)

module.exports = orderModel
