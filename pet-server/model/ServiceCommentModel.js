//地址表的模型
const { DataTypes } = require('sequelize')
const { sequelize } = require('../db/index')
const serviceDetailModel = require('../model/ServiceDetailModel')
//用户表模型
const serviceDetailCommentModel = sequelize.define(
  'service_comments',
  {
    service_comment_id: {
      type: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    service_comment_content: {
      type: DataTypes.STRING
    },
    service_comment_avatar: {
      type: DataTypes.STRING
    },
    service_comment_name: {
      type: DataTypes.STRING
    },
    service_comment_star: {
      type: DataTypes.INTEGER
    },
    service_comment_date: {
      type: DataTypes.DATE
    },
    service_detail_id: {
      type: DataTypes.UUIDV4,
      references: {
        model: serviceDetailModel,
        key: 'service_detail_id'
      }
    }
  },
  {
    // 这是其他模型参数
    sequelize,
    modelName: 'service_comments',
    timestamps: true,
    createdAt: false,
    updatedAt: false,
    freezeTableName: true
  }
)
module.exports = serviceDetailCommentModel
