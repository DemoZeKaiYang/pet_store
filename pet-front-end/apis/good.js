import request from "@/utils/request";

export const getGoodApi=async (obj)=>{
  return await request('/good', obj)
}