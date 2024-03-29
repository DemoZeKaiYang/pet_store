const { DataTypes } = require('sequelize')
const { sequelize } = require('../db/index')

const adminModel = sequelize.define(
  'admins',
  {
    admin_id: {
      type: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    admin_username: {
      type: DataTypes.STRING
    },
    admin_password: {
      type: DataTypes.STRING
    },
    admin_avatar: {
      type: DataTypes.STRING
    }
  },
  {
    // 这是其他模型参数
    sequelize,
    modelName: 'admins',
    timestamps: true,
    createdAt: false,
    updatedAt: false,
    freezeTableName: true
  }
)
module.exports = adminModel
