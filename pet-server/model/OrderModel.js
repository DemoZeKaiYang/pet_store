//地址表的模型
const { DataTypes } = require('sequelize')
const { sequelize } = require('../db/index')

//用户表模型
const orderModel = sequelize.define(
  'order',
  {
    order_id: {
      type: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.STRING
    },
    payment_status: {
      type: DataTypes.STRING
    },
    payment_date: {
      type: DataTypes.STRING
    },
    shipping_address: {
      type: DataTypes.INTEGER
    },
    shipping_status: {
      type: DataTypes.INTEGER
    },
    notes: {
      type: DataTypes.INTEGER,
      references: {
        model: goodCategoriesModel, // 这里指定外键所引用的模型
        key: 'good_category_id' // 这里指定外键所引用的模型的主键
      }
    },
    patment_method: {
      type: DataTypes.STRING
    },
    order_date: {
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
