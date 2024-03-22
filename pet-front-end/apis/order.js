import request from '@/utils/request'
//确认订单
export const confirmOrder = async (data) => {
  return await request('/confirmOrder', data, {
    method: 'post'
  })
}


