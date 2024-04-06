import request from '@/request'
import requpload from '@/request/requpload'
export const getGoodAPI = async () => {
  return await request.get('/admin/getGoods')
}

export const addGoodAPI = async (data) => {
  return await request.post('/admin/shop/addCategory', data)
}

export const updateGoodAPI = async (data) => {
  return await request.post('/admin/shop/updateCategory', data)
}

export const delGoodAPI = async (good_category_id) => {
  return await request.post('/admin/shop/delCategory', { good_category_id })
}

export const searchGoodAPI = async (search) => {
  return await request.post('/admin/searchGood', { search })
}

export const uploadGoodAPI = async (data) => {
  return await requpload.post('/admin/shop/uploadCategory', data)
}
