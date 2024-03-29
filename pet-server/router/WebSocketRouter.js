const express = require('express')
const router = express.Router()
const expressWs = require('express-ws')(router) // 直接初始化 express-ws
const { WebSocketHandler } = require('../router_handler/WebSocketHandler')

/**
 * msg:{
 *  type  //操作类型
 *  user_id:  //用户id
 * }
 */

router.ws('/chat', WebSocketHandler)

module.exports = router
