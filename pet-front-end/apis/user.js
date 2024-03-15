import request from '@/utils/request'
//修改用户
export const updateUserApi = async (user) => {
  return await request('/user/update', user, {
    method: 'post'
  })
}

//登录用户
export const loginApi = async (obj) => {
  return await request('/user/login', obj, {
    method: 'post'
  })
}

//注册用户
export const registerApi = async (obj) => {
  return await request('/user', obj, {
    method: 'post'
  })
}