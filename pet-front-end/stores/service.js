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

export const useServiceStore = defineStore('service', () => {
  const service = ref({})
  
  const updateService=(data)=>{
    service.value=data
  }
  return {
    service,
    updateService
  }
})