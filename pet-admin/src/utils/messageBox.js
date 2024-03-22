export const delMessageBox = async () => {
  const result = await ElMessageBox.confirm('是否删除', 'Warning', {
    confirmButtonText: '删除',
    cancelButtonText: '取消',
    type: 'error'
  })
  return result === 'confirm'
}
