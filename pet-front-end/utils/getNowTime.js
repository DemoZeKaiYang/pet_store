//获取当前的时间
//padStart字符串的前面填充
export const getCurrentTimeFormatted = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0'); // 月份从0开始，所以要加1，并用'0'填充至两位  
  const day = String(now.getDate()).padStart(2, '0'); // 日期用'0'填充至两位  
  const hours = String(now.getHours()).padStart(2, '0'); // 小时用'0'填充至两位  
  const minutes = String(now.getMinutes()).padStart(2, '0'); // 分钟用'0'填充至两位  
  const seconds = String(now.getSeconds()).padStart(2, '0'); // 秒用'0'填充至两位  
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}


