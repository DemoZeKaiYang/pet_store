import {
  defineStore
} from 'pinia'
import {
  computed,
  ref
} from 'vue'
import request from '@/utils/request'

export const useUserStore = defineStore('user', () => {
  const user = ref(uni.getStorageSync("user") || {})
  const token = ref(uni.getStorageSync("token") || "")
  const avatar = computed(() => {
    return 'http://192.168.2.99:9000/uploads/' + user.value.user_avatar
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
  }

  function updateDate(newValue) {
    user.value.user_birthday = newValue
  }

  function updateAvatar(newValue) {
    user.value.user_avatar = newValue
  }

  async function saveInfo() {
    //调用接口
    const result = await request('/user/update', user.value, {
      method: 'post'
    })
    if (result.code === 200) {
      user.value = result.data
      uni.setStorageSync("user",user.value)
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