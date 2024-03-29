import { defineStore } from 'pinia'

export const useAdminStore = defineStore('admin', () => {
  const admin = ref(JSON.parse(localStorage.getItem('admin')) || '')
  const token = ref(JSON.parse(localStorage.getItem('token')) || '')

  //登录完更新
  const updateAdmin = (data) => {
    admin.value = data.admin
    token.value = data.token
    localStorage.setItem('admin', JSON.stringify(admin.value))
    localStorage.setItem('token', JSON.stringify(token.value))
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
