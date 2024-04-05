const fs = require('fs')
const orderModel = require('../model/OrderModel')
const AlipaySdk = require('alipay-sdk').default

const alipaySdk = new AlipaySdk({
  appId: '9021000135682656',
  // keyType: 'PKCS1', // 默认值。请与生成的密钥格式保持一致，参考平台配置一节
  //   fs.readFileSync('../config/private-key.pem', 'ascii'),
  // fs.readFileSync('../config/alipay-public-key.pem', 'ascii'),
  privateKey:
    'MIIEogIBAAKCAQEAmkM3rzXZsv6zVLVOitJ1osSlM+BhdSGHXDav9Pcc9LuciLpsoR+amtM0NjlX0J96rSF0lLMlXN3sM6WCGAzRq1iz/IiKYR3zJh8UeEZ5r2BszQjIEYY1MaHEyNNxPff+JJOwrVYZP4zi4oUNxL4GhL7q+ZQcPSslc8va8zRu5AU+LKYlWE9ujglDpwIrhvcBiT/hmrJ0uP0TEHdrODevxXKx+ieLxVKGGLGvd+gnyXbtrd19L+GclHLKNPYicXmuHx40uccK6wplaKZMec/jfMASz4xvoaXZkdtVoJ70qcpTWMUUnlDPsobtLW5tZ3pWIwgWeGWwSfy6pWyFlHLWUQIDAQABAoIBAEmPzDoNH+cvdizq2K1ydw5LX8xBL7g/aOEcYwQZ4wEBhj/dRnf/LiaumLNS3QFrS4DL92ABncuPOFfYkRUO590hy5KdOf/d3FlNcOF6GgT7omaTzXQt36fvUHvD+LhoThT7KME/0YJwmLEUaeBsDYe30y14545zyMRTbfGUC11INSPbNAMlSpthnf0m+6cJq1Tq0EYf3VzGZYhEvc2/gBISBbcHQ5x3yDfBp623Oq4XuvIQPFb7r+0iZUKwa3L/tr1ed+WWhWXvdibDfcIO28g1NC5qvrGgZLrO1rRlbYUbLJ/jHX7Qfp1iYCHf5jsTxxbCnkjz+bnSjvqtBfWJZBECgYEAzNnZKKai8lCekVmFFcVxEc4IVlY4OjVBhwppMbsDJR/19Zrk97qkf/ZPWnPps8I1RSfEN0hTv/EFtOzrRnGzqs+0zBvPjPvgjkENEiFf0XZZbhAoYtzqohTCUOBzdqhnJvjeEpAC64JtvxwVYOLVVaydsKU/C2qrYTb8Qul5yNsCgYEAwMe9SxVnCj3oDDCMYUwte1vAmBI/BliU9mzr//9O1nQwsBvrCffo7nLGu0AYd1Ot+U9SIo52o8hmWLRrE0erMjjb4eIZnArX9S7LKKwEvzuz98eO7myZOB4lSxr2j0CWToY9mNQpR7ceWDPiAm9DxINPt746UHxDnSX+Otk+X0MCgYB3fyUUd5BaNfkp5MSjnJeGwV9PreAC5IojEkmm/uaow2ohKYgjkrbfBnnn0/IiMEoO21G0xfZE435mukXMxAsAu0VGQ3rhTRUDJqNPTjSs5ZLph3dnpGMixWVM9IGmWDpEG6y/u05Yv67xapp1+Bxma9lY8CxEpqbugLrK9ZNbPQKBgDWHwSJWQRRw+DxaRsDFvGNiqOoRNvr2IfcDa8zcAfI+tT5RokRUWJPNvy1DsQeBbu+pfO8ni/4SqYi8IHdsETeS3kus0tunjyv/4F3c1jybwW9uNFw0P597j3N5ezlv/8yyLeyADS5ixMRNM9blOnYY2Ev3QI4U01mRsTR6Gn2tAoGAbifRrw/LrCdC42wwOD1BF2b6C/PT579dUGPQlBzpvhC1tPLPcUsn3XHZ1sKHrqtCwBeCau0ZpTOaIFi1hQf0q6GtcxBqiAQ1SUrbJ8ZZUfV4+2jtXPQG4Drp6yeMK7OoRyxIDTwrit/NnR1qlkMhcK/v3V6WF/Sev/pwwOON0Jg=',
  alipayPublicKey:
    'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAjqVAgoufS28VnS6hReWmyb5z37/m1leLwPpNgzul6wGn54Iwe8qs7ECGJHp7f1NfDSglym3WAlpLF8NwDHwbWeoR5TYGfg4bFxkPga4m3vLJMQxjpk+FktEehD3pd/9G4JWZk7HnYTgR2bOpQllJG57sgP8aLRGo7TjxD0AsXvBag1nkLO3XI8X1CIfYjCt1Sa5VYGIn3nMe9cDCfjbGDunPW/0/8dgdIKNccaEZlUzj+V7/0RMxNusPbxruj7AwWV766Iuagdvjwf9VYu9l7w8SqCv2JsfpiWfN6pgP3Jwg+nzTTHaUKqbl1odY7kmHNVKwFZP6rZL7kAPkTCd4yQIDAQAB',
  sign_type: 'RSA2',
  keyType: 'PKCS1',
  gateway: 'https://openapi-sandbox.dl.alipaydev.com/gateway.do'
})

const payHandler = async (req, res) => {
  const { out_trade_no, subject, total_amount } = req.body

  try {
    // const result = await alipaySdk.exec('alipay.open.auth.token.app.query', {
    //   bizContent: { app_auth_token: 'token 请在开放平台上查询' }
    // })
    const result = await alipaySdk.sdkExec('alipay.trade.app.pay', {
      notify_url: 'http://qdc3rk.natappfree.cc',
      bizContent: {
        out_trade_no,
        subject,
        total_amount
      }
    })
    console.log(result)
    res.json({ code: 2000, message: '成功', data: result })
  } catch (error) {
    console.error(error)
  }
}

//支付成功
const paySuccess = async (req, res) => {
  const { order_id } = req.body
  console.log(req.body)
  try {
    await orderModel.update(
      { order_status: 2 },
      {
        where: {
          order_id
        }
      }
    )

    return res.json({ code: 2000, message: '支付成功' })
  } catch (error) {
    console.log(error)
    return res.json({ code: 2001, message: '数据库失败' })
  }
}
module.exports = {
  payHandler,
  paySuccess
}
