//地址表的模型
const { DataTypes } = require('sequelize')
const { sequelize } = require('../db/index')

//用户表模型
const petKindModel = sequelize.define(
  'pet_kinds',
  {
    pet_kind_id: {
      type: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },

    pet_kind: {
      type: DataTypes.STRING
    }
  },
  {
    // 这是其他模型参数
    sequelize,
    modelName: 'pet_kinds',
    timestamps: true,
    createdAt: false,
    updatedAt: false,
    freezeTableName: true
  }
)
module.exports = petKindModel
