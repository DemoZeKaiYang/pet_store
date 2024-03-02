import request from "@/utils/request";

//获取所有地址
export const getAddressApi=async (user_id)=>{
  return await request('/address', {user_id})
}

//修改地址and保存地址
export const updateAddressApi=async (obj)=>{
  return await request('/address', obj, {
      method: 'post',
    })
}


//删除地址
export const delAddressApi=async (id)=>{
  return  await request('/address/del', {address_id:id}, {method: 'post'})
}
