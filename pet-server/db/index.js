const { Sequelize } = require('sequelize')
const { config } = require('./config.js')

const { database, host, port, user, password } = config

const sequelize = new Sequelize(database, user, password, {
  dialect: 'mysql',
  host,
  port,
  logging: true,
  timezone: '+08:00',
  pool: {
    // 使用连接池
    max: 5, // 连接池中最大连接数量
    min: 0, // 连接池中最小连接数量
    acquire: 30000,
    idle: 10000 // 如果一个线程 10 秒钟内没有被使用过的话，那么就释放线程
  }
})

//  const sequelize = new Sequelize(database, user, password, {
//          dialect: 'mysql',
//          host,
//          port,
//          logging: true,        // logging: true, 打印sql到控制台
//          timezone: '+08:00',   //时间上的统一,这里是东八区，默认为0时区
//          define: {
//         //全局的定义，会通过连接实例传递
//              // timestamps: false,   //默认情况下,Sequelize 使用数据类型 DataTypes.DATE 自动向每个模                                  型添加 createdAt 和 updatedAt 字段. 这些字段会自动进行管理 - 每当                                  你使用Sequelize 创建或更新内容时,这些字段都会被自动设置.                                          createdAt 字段将包含代表创建时刻的时间戳,而 updatedAt 字段将包含                                  最新更新的时间戳.
//     //对于带有timestamps: false 参数的模型,可以禁用此行为
//              // createdAt: 'created_at',  //自定义时间戳
//              // updatedAt: 'updated_at',
//              // paranoid: true,
//              // deletedAt: 'deleted_at',  //paranoid表示在被告之要删除记录时并不会真正的物理上删除，而                                       是添加一个存有删除请求时间戳deletedAt的特殊字段。传递                                             paranoid: true参数给模型定义中。paranoid要求必须启用时间戳，                                       即必须传timestamps: true
//              // 把驼峰命名转换为下划线
//              //underscored: false,
//              pool: {    // 使用连接池
//                 max: 5,  // 连接池中最大连接数量
//                 min: 0,  // 连接池中最小连接数量
//                 acquire: 30000,
//                 idle: 10000 // 如果一个线程 10 秒钟内没有被使用过的话，那么就释放线程
//              }
//          }
// })
//      ​

//  ​

// // 将连接对象暴露出去
module.exports = {
  sequelize
}
