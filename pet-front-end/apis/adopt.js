import request from "@/utils/request";

export const getAdoptAPI = async () => {
  return await request('/adopt')
}

export const getAdoptOneAPI = async (adopt_id) => {
  return await request('/adopt', {
    adopt_id
  }, {
    method: 'post'
  })
}


export const applyAdoptAPI = async (data) => {
  return await request('/applyAdopt', data, {
    method: 'post'
  })
}

export const getAdoptApplyAPI = async (user_id) => {
  return await request('/getAdoptApply', {
    user_id
  }, {
    method: 'post'
  })
}

