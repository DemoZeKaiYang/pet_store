import {
  defineStore
} from 'pinia'
import {
  computed,
  ref
} from 'vue'
import request from '@/utils/request'
export const useCarStore = defineStore('car', () => {
  //购物车
  const insideCarGoods = ref([])
  //结算购物车商品
  const checkOutCar = computed(() => {
    return insideCarGoods.value.filter(item => {
      return item.selected  
    })
  })
  //结算购物车的数量
  const checkOutNum=computed(()=>{
    let num=0
    checkOutCar.value.forEach(item=>{
      num+=item.addNum
    })
    return num
  } )


  // 加入到购物车的总个数  
  const carNum = computed(() => {
    let count = 0
    insideCarGoods.value.forEach(item => {
      count += item.addNum
    })
    if (count <= 99) {
      return count
    } else {
      return 99
    }
  })


  //是否全选
  const isAllselected = computed(() => {
    if (insideCarGoods.value.length <= 0) {
      return false
    }
    return insideCarGoods.value.every(item => {
      return item.selected
    })
  })


  //总价
  const sumPrice = computed(() => {
    let price = 0.00
    if (insideCarGoods.value.length <= 0) {
      return price.toFixed(2)
    }
    insideCarGoods.value.forEach(item => {
      if (item.selected) {
        price += parseFloat(item.good_price * item.addNum)
      }
    })
    return price.toFixed(2)
  })



  //删除商品
  const deleteGoods = (good_id) => {
    insideCarGoods.value = insideCarGoods.value.filter(item => {
      return item.good_id !== good_id
    })
  }



  //全选
  const allSelectTap = () => {
    let temp = isAllselected.value
    insideCarGoods.value.forEach(item => {
      item.selected = !temp
    })
  }


  //更改商品的选中状态 
  const selectedTap = (good_id) => {
    insideCarGoods.value = insideCarGoods.value.map(item => {
      if (good_id === item.good_id) {
        return {
          ...item,
          selected: !item.selected
        }
      }
      return item
    })
  }

  //添加商品到购物车
  const addGoodInCar = (good) => {
    //如果在pinia中已经存在，则存储
    let isExist = insideCarGoods.value.some(item => {
      return item.good_id === good.good_id
    })
    //存在的话添加数量
    if (isExist) {
      insideCarGoods.value = insideCarGoods.value.map(item => {
        return item.good_id === good.good_id ? {
          ...item,
          addNum: item.addNum + 1
        } : item
      })
    } else {
      //不存在就创建新的
      insideCarGoods.value.push({
        ...good,
        addNum: 1
      })
    }
  }



  return {
    insideCarGoods,
    carNum,
    checkOutNum,
    deleteGoods,
    allSelectTap,
    isAllselected,
    sumPrice,
    selectedTap,
    addGoodInCar,
    checkOutCar
  }
}, {
  unistorage: true
})