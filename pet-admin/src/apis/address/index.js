import request from '@/request'
export const getAddressAPI = async () => {
  return await request.get('/admin/getAddress')
}

export const updateAddressAPI = async (data) => {
  return await request.post('/admin/updateAddress', data)
}

export const delAddressAPI = async (address_id) => {
  return await request.post('/admin/delAddress', { address_id })
}

export const searchAddressAPI = async (search) => {
  return await request.post('/admin/searchAddress', { search })
}
