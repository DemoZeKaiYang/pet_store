export const delMessageBox = async () => {
  const result = await ElMessageBox.confirm('是否删除', 'Warning', {
    confirmButtonText: '删除',
    cancelButtonText: '取消',
    type: 'error'
  })
  return result === 'confirm'
}

export const accessMessageBox = async () => {
  const result = await ElMessageBox.confirm('是否允许', 'Warning', {
    confirmButtonText: '允许',
    cancelButtonText: '取消',
    type: 'error'
  })
  return result === 'confirm'
}

export const rejectMessageBox = async () => {
  const result = await ElMessageBox.confirm('是否拒绝', 'Warning', {
    confirmButtonText: '拒绝',
    cancelButtonText: '取消',
    type: 'error'
  })
  return result === 'confirm'
}
