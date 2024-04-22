import request from '@/request'

export const getOrderAPI = async () => {
  return await request.get('/admin/getOrder')
}

export const delOrderAPI = async (order_id) => {
  return await request.post('/admin/delOrder', { order_id })
}

export const searchOrderAPI = async (search) => {
  return await request.post('/admin/searchOrder', { search })
}

export  const searchOrderGoodAPI=async (order_id)=>{
  return await request.post('/admin/searchOrderGood', { order_id })
}


export  const successOrderAPI=async (order_id)=>{
  return await request.post('/admin/successOrder', { order_id })
}