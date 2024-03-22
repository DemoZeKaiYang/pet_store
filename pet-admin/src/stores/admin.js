import { defineStore } from 'pinia'

export const useAdminStore = defineStore('admin', () => {
  const admin = ref(localStorage.getItem('admin') || '')
  const token = ref(localStorage.getItem('token') || '')

  //登录完更新
  const updateAdmin = (data) => {
    admin.value = data.admin
    token.value = data.token
    localStorage.setItem('admin', admin.value)
    localStorage.setItem('token', token.value)
  }

  //退出登录

  const delAdmin = () => {
    admin.value = ''
    token.value = ''
    localStorage.removeItem('admin')
    localStorage.removeItem('token')
  }

  return { admin, updateAdmin, token, delAdmin }
})
