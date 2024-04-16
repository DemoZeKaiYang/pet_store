import request from '@/request'
import requpload from '@/request/requpload'
export const getUserAPI = async () => {
  return await request.get('/admin/getUser')
}


export const updateUserAPI = async (data) => {
  return await request.post('/admin/updateUser', data)
}

export  const updatePasswordAPI=async (data) => {
  return await request.post('/admin/updatePassword', data)
}

export const searchUserAPI = async (search) => {
  return await request.post('/admin/searchUser', { search })
}

export const uploadUserAPI = async (data) => {
  return await requpload.post('/admin/uploadUser', data)
}

