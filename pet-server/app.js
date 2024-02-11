const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())
//图片静态资源
app.use('/uploads', express.static('./uploads'))
const UserRouter = require('./router/UserRouter.js')
const AddressRouter = require('./router/AddressRouter.js')
app.use(UserRouter)
app.use(AddressRouter)

app.listen(9000, () => {
  console.log('服务已经启动，端口9000')
})
