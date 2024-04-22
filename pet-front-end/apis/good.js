import request from "@/utils/request";

export const getGoodApi=async (obj)=>{
  return await request('/good', obj)
}

export const getIdGoodAPI=async(good_id)=>{
 return await request('/good',{good_id},{method: 'post'})
}
