export const successMessage = (text) => {
  ElMessage({
    message: text,
    type: 'success',
    center: true,
    showClose: true
  })
}

export const failMessage = (text) => {
  ElMessage({
    message: text,
    type: 'error',
    center: true,
    showClose: true
  })
}
