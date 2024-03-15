const { DataTypes } = require('sequelize')
const { sequelize } = require('../db/index')
const goodModel = require('./GoodModel')
const orderModel = require('./OrderModel')
//订单和商品关联表
const orderGoodModel = sequelize.define(
  'orders_goods',
  {
    order_good_id: {
      type: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    good_id: {
      type: DataTypes.STRING,
      references: {
        model: goodModel,
        key: 'good_id'
      }
    },
    order_id: {
      type: DataTypes.STRING,
      references: {
        model: orderModel,
        key: 'order_id'
      }
    },
    quantity: {
      type: DataTypes.INTEGER
    },
    total_price: {
      type: DataTypes.DOUBLE
    }
  },
  {
    // 这是其他模型参数
    sequelize,
    modelName: 'orders_goods',
    timestamps: true,
    createdAt: false,
    updatedAt: false,
    freezeTableName: true
  }
)

module.exports = orderGoodModel
