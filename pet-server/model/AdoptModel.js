const { DataTypes } = require('sequelize')
const { sequelize } = require('../db/index')

const adoptModel = sequelize.define(
  'adopts', // Model name
  {
    adopt_id: {
      type: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false
    },
    adopt_name: {
      type: DataTypes.STRING
    },
    adopt_birthday: {
      type: DataTypes.DATE
    },
    adopt_image: {
      type: DataTypes.STRING
    },
    adopt_status: {
      type: DataTypes.INTEGER
    },
    adopt_address: {
      type: DataTypes.STRING
    },
    adopt_description: {
      type: DataTypes.TEXT
    },
    adopt_sex: {
      type: DataTypes.STRING
    },
    user_id: {
      type: DataTypes.UUIDV4
    },
    adopt_var: {
      type: DataTypes.STRING
    }
  },
  {
    sequelize,
    modelName: 'adopts',
    timestamps: true,
    createdAt: false,
    updatedAt: false,
    freezeTableName: true
  }
)

module.exports = adoptModel
