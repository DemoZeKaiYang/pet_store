import request from '@/request'
import requpload from '@/request/requpload'
export const getServiceAPI = async () => {
  return await request.get('/admin/getService')
}

//service_detail
export const searchServiceDetailAPI = async (search) => {
  return await request.post('/admin/searchService', { search })
}
export const delServiceImageAPI = async (service_detail_id) => {
  return await request.post('/admin/delServiceImage', { service_detail_id })
}
export const addServiceDetailAPI = async (data) => {
  return await request.post('/admin/addServiceDetail', data)
}
export const updateServiceDetailAPI = async (data) => {
  return await request.post('/admin/updateServiceDetail',  data)
}
export const delServiceDetailAPI = async (service_detail_id) => {
  return await request.post('/admin/adminDelServiceDetail', { service_detail_id })
}



//service_image

export const getServiceImageAPI= async () => {
  return await request.get('/admin/getServiceImage')
}

export const getAllServiceAPI = async () => {
  return await request.get('/admin/getAllService')
}

export const uploadServiceImageAPI = async (data) => {
  return await request.post('/admin/uploadServiceImage',  data )
}
export const addServiceImageAPI = async (data) => {
  return await request.post('/admin/addServiceImage', data)
}
export const updateServiceImageAPI = async (data) => {
  return await request.post('/admin/updateServiceImage', data)
}

export const searchServiceImageAPI = async (search) => {
  return await request.post('/admin/searchServiceImage', { search })
}