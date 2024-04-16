import request from '@/request'
import requpload from '@/request/requpload'
export const getGoodAPI = async () => {
  return await request.get('/admin/getGoods')
}

export const addGoodAPI = async (data) => {
  return await request.post('/admin/addGood', data)
}

export const updateGoodAPI = async (data) => {
  return await request.post('/admin/updateGood', data)
}

export const delGoodAPI = async (good_id) => {
  return await request.post('/admin/delGood', { good_id })
}

export const searchGoodAPI = async (search) => {
  return await request.post('/admin/searchGood', { search })
}

export const uploadGoodAPI = async (data) => {
  return await requpload.post('/admin/uploadGood', data)
}
