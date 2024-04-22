const { DataTypes } = require('sequelize')
const { sequelize } = require('../db/index')
const userModel = require('../model/UserModel')
const adoptModel = require('./AdoptModel')
const applyModel = sequelize.define(
  'applys',
  {
    apply_id: {
      type: DataTypes.UUIDV4,
      primaryKey: true
    },
    sex: {
      type: DataTypes.STRING,
      allowNull: true
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    experience: {
      type: DataTypes.STRING,
      allowNull: true
    },
    pet: {
      type: DataTypes.STRING,
      allowNull: true
    },
    marriage: {
      type: DataTypes.STRING,
      allowNull: true
    },
    income: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    profession: {
      type: DataTypes.STRING,
      allowNull: true
    },
    city: {
      type: DataTypes.STRING,
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true
    },
    introduction: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: userModel, // 假设你有一个User模型
        key: 'user_id'
      }
    },
    status: {
      type: DataTypes.STRING
    },
    adopt_id: {
      type: DataTypes.UUIDV4,
      references: {
        model: adoptModel,
        key: 'adopt_id'
      }
    }
  },
  {
    sequelize,
    modelName: 'applys',
    timestamps: true,
    createdAt: false,
    updatedAt: false,
    freezeTableName: true
  }
)

module.exports = applyModel
