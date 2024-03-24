module.exports = function (io) {
  let socketList = {}
  let member = 0
  io.on('connection', (socket) => {
    console.log('连接成功')

    socket.on('join', (name) => {
      console.log(name)
      socket.name = name
      socketList[name] = socket.id
      member++
      //广播
      socket.broadcast.emit('welcome', name, member)
      socket.emit('welcome', name, member)
    })

    //接口客户端信息
    socket.on('message', (data) => {
      console.log(data)

      //广播消息
      socket.broadcast.emit('gbmsg', data)
    })
  })
}
