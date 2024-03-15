const express = require('express')
const app = express()
const cors = require('cors')
const fs = require('fs')
const path = require('path')
const expressWs = require('express-ws')
const { JsonWebTokenError } = require('jsonwebtoken')

//应用express
expressWs(app)

app.use(cors())
app.use(express.json())
//图片静态资源
app.use('/uploads', express.static('./uploads'))
app.use('/pet_uploads', express.static('./pet_uploads'))
app.use('/good_uploads', express.static('./good_uploads'))

const UserRouter = require('./router/UserRouter.js')
const AddressRouter = require('./router/AddressRouter.js')
const PetRouter = require('./router/PetRouter')
const PetKindRouter = require('./router/PetKindRouter.js')
const ShopRouter = require('./router/ShopRouter')
const GoodRouter = require('./router/GoodRouter')
const SocketRouter = require('./router/SocketRouter.js')
const OrderRouter = require('./router/OrderRouter')
app.use(UserRouter)
app.use(AddressRouter)
app.use(PetRouter)
app.use(PetKindRouter)
app.use(ShopRouter)
app.use(GoodRouter)
app.use(OrderRouter)
app.use('/socket', SocketRouter)
app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401).json({ code: 401, message: 'token过期了' })
  } else {
    next(err)
  }
})

app.listen(9000, () => {
  console.log('服务已经启动，端口9000')
})
