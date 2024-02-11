// utils/request.js
const baseUrl = 'http://192.168.2.99:9000'; // 你的API域名

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
      url: baseUrl + path,
      method: options.method || 'GET',
      data: params,
      header: {
        "Authorization": token
      },
      sslVerify: false,
      ...options, // 其他请求配置
      success: (res) => {
        // 请求成功处理
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