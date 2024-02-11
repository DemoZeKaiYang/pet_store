const { DataTypes } = require('sequelize')
const { sequelize } = require('../db/index')
const generateRandomString = require('../utils/generateRandomString')
const dayjs = require('dayjs')
const now = dayjs().format('YYYY-MM-DD')
//用户表模型
const userModel = sequelize.define(
  'users',
  {
    user_id: {
      type: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    user_name: {
      type: DataTypes.STRING,
      defaultValue: '爱宠之家' + generateRandomString()
    },
    user_phone: {
      type: DataTypes.STRING,
      allowNull: false
    },
    user_birthday: {
      type: DataTypes.DATEONLY,
      defaultValue: now
    },
    user_signature: {
      type: DataTypes.STRING,
      defaultValue: '这个人很神秘,没有个性签名'
    },
    user_password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    user_avatar: {
      type: DataTypes.STRING,
      defaultValue: 'default.png'
    }
  },
  {
    // 这是其他模型参数
    sequelize,
    modelName: 'users',
    timestamps: true,
    createdAt: false,
    updatedAt: false
  }
)
module.exports = userModel
