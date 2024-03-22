import axios from 'axios'
import { useAdminStore } from '@/stores/admin'

const request = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 3000,
  headers: { 'X-Custom-Header': 'foobar' }
})

// 添加请求拦截器
request.interceptors.request.use(
  function (config) {
    const adminStore = useAdminStore()
    if (adminStore.token) {
      config.headers['Authorization'] = adminStore.token
    }
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
request.interceptors.response.use(
  function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response.data
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error)
  }
)

export default request
