const express = require('express')
const expressWs = require('express-ws')

const router = express.Router()

expressWs(router)

router.ws('/message', function (ws, req) {
  ws.send('连接成功')
  ws.on('message', function (msg) {
    ws.send('pong' + msg)
  })
})

module.exports = router
