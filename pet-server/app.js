const express = require('express')
const app = express()
const cors = require('cors')
const fs = require('fs')
const path = require('path')
const expressWS = require('express-ws')(app)
const { JsonWebTokenError } = require('jsonwebtoken')

app.use(cors()) //跨域
app.use(express.json()) //请求体json格式
//图片静态资源
app.use('/uploads', express.static('./uploads'))
app.use('/pet_uploads', express.static('./pet_uploads'))
app.use('/good_uploads', express.static('./good_uploads'))
app.use('/service_uploads', express.static('./service_uploads'))

const UserRouter = require('./router/UserRouter.js')
const AddressRouter = require('./router/AddressRouter.js')
const PetRouter = require('./router/PetRouter')
const PetKindRouter = require('./router/PetKindRouter.js')
const ShopRouter = require('./router/ShopRouter')
const GoodRouter = require('./router/GoodRouter')
const OrderRouter = require('./router/OrderRouter')
const AdminRouter = require('./router/AdminRouter')
const ServiceRouter = require('./router/ServiceRouter.js')
const WebsocketRouter = require('./router/WebSocketRouter.js')
app.use(UserRouter)
app.use(AddressRouter)
app.use(PetRouter)
app.use(PetKindRouter)
app.use(ShopRouter)
app.use(GoodRouter)
app.use(OrderRouter)
app.use(AdminRouter)
app.use(ServiceRouter)
app.use(WebsocketRouter)
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
