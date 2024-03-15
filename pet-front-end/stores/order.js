import {
  defineStore
} from 'pinia'
import {
  computed,
  ref
} from 'vue'
import request from '@/utils/request'
export const useOrderStore = defineStore('order', () => {
  const order=ref({})

  return {

  }
})