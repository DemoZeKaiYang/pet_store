import request from "@/utils/request";

export const getAddressApi=async (user_id)=>{
  return await request('/address', {user_id})
}