//这个工具包是将
/**
 * @param {String} tragetUrl 请求地址
 * @param {Object} params 请求携带参数
 * @return {String} 返回拼接好的地址
 */
export const reqParams = (tragetUrl, params) => {
  // 拼接查询字符串
  const queryString = Object.keys(params)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
    .join('&');
  return `${tragetUrl}?${queryString}`
}