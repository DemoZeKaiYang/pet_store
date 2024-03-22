import request from '@/request'

export const getShopKindAPI = async () => {
  return await request.get('/admin/shop/kind')
}

export const addShopKindAPI = async (data) => {
  return await request.post('/admin/shop/addKind', data)
}

export const updateShopKindAPI = async (data) => {
  return await request.post('/admin/shop/updateKind', data)
}

export const delShopKindAPI = async (good_kind_id) => {
  return await request.post('/admin/shop/delKind', { good_kind_id })
}

export const searchShopKindAPI = async (search) => {
  return await request.post('/admin/shop/search', { search })
}
