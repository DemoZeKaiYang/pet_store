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