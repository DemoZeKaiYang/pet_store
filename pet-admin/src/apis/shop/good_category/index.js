import request from '@/request'
import requpload from '@/request/requpload'
export const getShopCategoryAPI = async () => {
  return await request.get('/admin/shop/Category')
}

export const addShopCategoryAPI = async (data) => {
  return await request.post('/admin/shop/addCategory', data)
}

export const updateShopCategoryAPI = async (data) => {
  return await request.post('/admin/shop/updateCategory', data)
}

export const delShopCategoryAPI = async (good_category_id) => {
  return await request.post('/admin/shop/delCategory', { good_category_id })
}

export const searchShopCategoryAPI = async (search) => {
  return await request.post('/admin/shop/searchCategory', { search })
}

export const uploadShopCategoryAPI = async (data) => {
  return await requpload.post('/admin/shop/uploadCategory', data)
}
