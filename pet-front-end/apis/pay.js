import request from "@/utils/request";

export const payAPI = async (data) => {
  return await request('/pay', data, {
    method: 'post'
  })
}
export const paySuccessAPI = async (data) => {
  return await request('/paySuccess', data, {
    method: 'post'
  })
}