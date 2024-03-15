import request from '@/request'

export const getKind = async () => {
  return await request('/kind')
}


