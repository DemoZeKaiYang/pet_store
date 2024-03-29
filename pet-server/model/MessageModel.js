//地址表的模型
const { DataTypes } = require('sequelize')
const { sequelize } = require('../db/index')
const adminModel = require('./AdminModel')
const userModel = require('./UserModel')

//用户表模型
const messageModel = sequelize.define(
  'messages',
  {
    message_id: {
      type: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    message: {
      type: DataTypes.STRING
    },
    message_date: {
      type: DataTypes.DATE
    },
    message_user_id: {
      type: DataTypes.UUIDV4,
      references: {
        model: userModel,
        key: 'user_id'
      }
    },
    message_order: {
      type: DataTypes.INTEGER,
      autoIncrement: true
    },
    message_admin_id: {
      type: DataTypes.UUIDV4,
      references: {
        model: adminModel,
        key: 'admin_id'
      }
    },
    //1代表用户,2代表客服
    message_type: {
      type: DataTypes.INTEGER
    }
  },
  {
    // 这是其他模型参数
    sequelize,
    modelName: 'messages',
    timestamps: true,
    createdAt: false,
    updatedAt: false,
    freezeTableName: true
  }
)
module.exports = messageModel
