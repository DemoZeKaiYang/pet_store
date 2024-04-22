import request from '@/request'

export const getApplyAPI = async () => {
  return await request.get('/admin/getApply')
}
export  const updateApplyAPI=async (data) => {
  return await request.post('/admin/updateApply',data)
}
