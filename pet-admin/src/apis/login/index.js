import request from '@/request'

export const loginAPI = async (data) => {
  return await request.post('/loginAdmin', data)
}
