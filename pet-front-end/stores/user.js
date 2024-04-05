import {
  defineStore
} from 'pinia'
import {
  computed,
  ref
} from 'vue'

import {
  devUrl
} from '@/config.js'
import {
  updateUserApi
} from '@/apis/user.js'
export const useUserStore = defineStore('user', () => {
  const user = ref(uni.getStorageSync("user") || {})
  const token = ref(uni.getStorageSync("token") || "")
  const avatar = computed(() => {
    return `${devUrl}/uploads/` + user.value.user_avatar
  })

  function updateUser(newValue) {
    user.value = newValue
    uni.setStorageSync("user", user.value)
  }

  function updateToken(newValue) {
    token.value = newValue
    uni.setStorageSync("token", token.value)
  }

  function resetUser() {
    user.value = {}
    uni.removeStorageSync("user")
    uni.removeStorageSync("token")
  }

  function updateDate(newValue) {
    user.value.user_birthday = newValue
  }

  function updateAvatar(newValue) {
    user.value.user_avatar = newValue
  }

  async function saveInfo() {
    const result = await updateUserApi(user.value)
    if (result.code === 200) {
      user.value = result.data
      uni.removeStorageSync("user")
      uni.setStorageSync("user", user.value)
      return true
    }
    return false
  }
  return {
    user,
    updateUser,
    updateToken,
    token,
    resetUser,
    updateDate,
    avatar,
    updateAvatar,
    saveInfo
  }
})