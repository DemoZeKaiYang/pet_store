// utils/request.js

import {devUrl}from '@/config.js'
import {
  useUserStore
} from '@/stores/user.js'
/**
 * 封装的请求方法
 * @param {String} path 请求路径
 * @param {Object} params 请求参数
 * @param {Object} options 请求配置
 */
function request(path, params = {}, options = {}) {
  let token = null
  token = uni.getStorageSync("token")
  return new Promise((resolve, reject) => {
    uni.request({
      url: devUrl + path,
      method: options.method || 'GET',
      data: params,
      header: {
        "Authorization": token
      },
      sslVerify: false,
      ...options, // 其他请求配置
      success: (res) => {
        // 请求成功处理C
        if (res.data.code === 401) {
          const store = useUserStore()
          store.resetUser()
          //token过期，清除登录记录
          uni.showToast({
            title: '登录超时,请重新登录',
            duration: 3000,
            icon:'fail'
          })
          uni.navigateTo({
            url:'/pages/login/login'
          })
          return reject(res.data)
        }
        resolve(res.data);
      },
      fail: (err) => {

        // 请求失败处理
        reject(err);
      },
    })
  })
}

export default request;