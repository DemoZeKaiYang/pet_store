import request from '@/request'
import requpload from '@/request/requpload.js'

export const getGoodImageAPI = async () => {
  return await request.get('/admin/getGoodImage')
}

export const addGoodImageAPI = async (data) => {
  return await request.post('/admin/addGoodImage', data)
}


export const updateGoodImageAPI = async (data) => {
  return await request.post('/admin/updateGoodImage', data)
}

export const delGoodImageAPI = async (good_image_id) => {
  return await request.post('/admin/delGoodImage', { good_image_id })
}

export const searchGoodImageAPI = async (search) => {
  return await request.post('/admin/searchGoodImage', { search })
}

export const uploadGoodImageAPI = async (data) => {
  return await requpload.post('/admin/uploadGoodImage', data)
}
