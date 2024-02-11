const notFutureDate = (date) => {
  const today = new Date()
  return date <= today
}

module.exports = notFutureDate
