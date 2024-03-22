import {
  defineStore
} from 'pinia'
import {
  computed,
  ref
} from 'vue'
import request from '@/utils/request'
export const useOrderStore = defineStore('order', () => {
  const orderList = ref({})

  const updateOrder = (data) => {
    orderList.value = data

  }

  const goodList = computed(() => {
    console.log(orderList.value.goodList);
    return orderList.value.goodList
  })
  //商品总数
  const goodTotalNumber = computed(() => {
    let total = 0
    orderList.value.goodList.forEach(item => {
      total += item.addNum
    })
    return total
  })
  const goodSumPrice = computed(() => {
    let price = 0;
    orderList.value.goodList.forEach(item => {
      price += item.addNum * item.good_price
    })
    return parseFloat(price.toFixed(2))
  })

  return {
    orderList,
    updateOrder,
    goodTotalNumber,
    goodSumPrice,
    goodList
  }
}, {
  unistorage: true
})