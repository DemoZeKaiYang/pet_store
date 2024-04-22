import request from '@/request'
import requpload from '@/request/requpload'

export const getArticleAPI = async () => {
  return await request.get('/admin/getArticle')
}
export const searchArticle = async (search) => {
  return await request.post('/admin/searchArticle', { search })
}
export const addArticleAPI = async (data) => {
  return await request.post('/admin/addArticle', data)
}

export const delArticleAPI = async (article_id) => {
  return await request.post('/admin/delArticle', { article_id })
}

export const updateArticleAPI = async (data) => {
  return await request.post('/admin/updateArticle', data)
}

export const uploadArticleAPI = async (data) => {
  return await requpload.post('/admin/uploadArticle', data)
}
