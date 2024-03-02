import request from "@/utils/request";
//获取宠物
export const getPetApi = async (user_id) => {
  return await request('/pet', {
    user_id
  })
}

//获取宠物种类
export const getKindPetApi = async (obj) => {
  return await request('/kind')
}


//编辑宠物
export const updatePetApi = async (obj) => {
  return await request('/pet', obj, {
    method: 'post'
  })
}

//删除宠物
export const delPetApi = async (id) => {
  return await request('/pet/del', {
    pet_id: id
  }, {
    method: 'post'
  })
}