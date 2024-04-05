import request from "@/utils/request";

//获取所有宠物服务类型
export const getServiceTypeApi = async () => {
  return await request('/getServiceType')
}

//获取所对应的类型
export const getServiceAPI = async (service_type_id) => {
  return await request('/getService', {
    service_type_id
  }, {
    method: 'post'
  })
}

//获取详细服务
export const getServiceDetailAPI = async (service_id) => {
  return await request('/getServiceDetail', {
    service_id
  })
}

//确认服务
export const confirmServiceAPI = async (data) => {
  return await request('/confirmService', data, {
    method: 'post'
  })
}


//获取订单服务
export const getServiceOrder = async (data) => {
  return await request('/getServiceOrder', data)
}

//取消订单
export const cancelServiceOrderAPI = async (data) => {
  return await request('/cancelServiceOrder', data, {
    method: 'post'
  })
}

//确认订单
export const successServiceOrderAPI = async (data) => {
  return await request('/successServiceOrder', data, {
    method: 'post'
  })
}