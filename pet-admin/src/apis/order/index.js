import request from '@/request'
import requpload from '@/request/requpload'
export const getOrderAPI = async () => {
  return await request.get('/admin/getOrder')
}

export const addPetAPI = async (data) => {
  return await request.post('/admin/addPet', data)
}

export const updatePetAPI = async (data) => {
  return await request.post('/admin/updatePet', data)
}

export const delOrderAPI = async (order_id) => {
  return await request.post('/admin/delOrder', { order_id })
}

export const searchOrderAPI = async (search) => {
  return await request.post('/admin/searchOrder', { search })
}

export const uploadPetAPI = async (data) => {
  return await requpload.post('/admin/uploadPet', data)
}

export const getPetKindAPI = async () => {
  return await request.get('/admin/getPetKind')
}
