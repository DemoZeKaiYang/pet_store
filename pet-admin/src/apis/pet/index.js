import request from '@/request'
import requpload from '@/request/requpload'
export const getPetAPI = async () => {
  return await request.get('/admin/getPet')
}

export const addPetAPI = async (data) => {
  return await request.post('/admin/addPet', data)
}

export const updatePetAPI = async (data) => {
  return await request.post('/admin/updatePet', data)
}

export const delPetAPI = async (pet_id) => {
  return await request.post('/admin/delPet', { pet_id })
}

export const searchPetAPI = async (search) => {
  return await request.post('/admin/searchPet', { search })
}

export const uploadPetAPI = async (data) => {
  return await requpload.post('/admin/uploadPet', data)
}

export const getPetKindAPI = async () => {
  return await request.get('/admin/getPetKind')
}
