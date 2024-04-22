import request from "@/utils/request";

export const getArticleAPI=async ()=>{
  return await request('/getArticle')
}

  
export const getArticleContentAPI=async(article_id)=>{
  return await request('/getArticleContent',{article_id},{method:'post'})
}