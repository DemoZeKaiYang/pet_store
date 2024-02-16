//地址表的模型
const { DataTypes } = require('sequelize')
const { sequelize } = require('../db/index')
const userModel = require('./UserModel')
const petKindModel = require('./PetKindModel')
//用户表模型
const petModel = sequelize.define(
  'pets',
  {
    pet_id: {
      type: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    pet_avatar: {
      type: DataTypes.STRING
    },
    pet_name: {
      type: DataTypes.STRING
    },
    pet_kind_id: {
      type: DataTypes.UUIDV4,
      allowNull: false,
      references: {
        model: petKindModel, // 这里指定外键所引用的模型
        key: 'pet_kind_id' // 这里指定外键所引用的模型的主键
      }
    },
    pet_sex: {
      type: DataTypes.INTEGER
    },
    pet_sterilize: {
      type: DataTypes.INTEGER
    },
    pet_birthday: {
      type: DataTypes.DATEONLY
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
    modelName: 'pets',
    timestamps: true,
    createdAt: false,
    updatedAt: false,
    freezeTableName: true
  }
)
module.exports = petModel
