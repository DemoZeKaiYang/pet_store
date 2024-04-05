import request from '@/utils/request'
//确认订单
export const confirmOrder = async (data) => {
  return await request('/confirmOrder', data, {
    method: 'post'
  })
}


//获取用户对应的id
export const getOrder = async (data) => {
  return await request('/getOrder', data)
}



//取消订单
export const cancelOrderAPI = async (data) => {
  return await request('/cancelOrder', data, {
    method: 'post'
  })
}

//确认订单
export const successOrderAPI = async (data) => {
  return await request('/successOrder', data, {
    method: 'post'
  })
}