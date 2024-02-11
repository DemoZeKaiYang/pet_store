//随机生成五位的字母，数字，
function generateRandomString() {
  const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let randomString = ''

  for (let i = 0; i < 5; i++) {
    randomString += chars[Math.floor(Math.random() * chars.length)]
  }

  return randomString
}
module.exports = generateRandomString
