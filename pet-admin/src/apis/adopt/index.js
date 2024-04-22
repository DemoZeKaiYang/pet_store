import request from '@/request'
import requpload from '@/request/requpload'



export const getAdoptAPI = async () => {
  return await request.get('/adopt')
}
export const searchAdoptAPI = async (search) => {
  return await request.post('/admin/searchAdopt', { search })
}
export const addAdoptAPI = async (data) => {
  return await request.post('/admin/addAdopt', data)
}

export  const delAdoptAPI=async(adopt_id)=>{
  return await request.post('/admin/delAdopt', { adopt_id })
}


export const updateAdoptAPI = async (data) => {
  return await request.post('/admin/updateAdopt', data)
}
