<template>
  <view>
    <tab-nav
      ref="tabnav"
      :tabnav="orderList"
      @ontype_="ontype"
      :fixed="false"
      :default-key="defaulKey"
    ></tab-nav>
    <template v-for="(item, index) in lists">
      <Order :orderData="item"></Order>
    </template>
  </view>
</template>

<script setup>
import { ref } from 'vue'
import Order from './components/Order.vue'
import { getOrder } from '@/apis/order.js'
import { useUserStore } from '@/stores/user'
import { onLoad, onUnload } from '@dcloudio/uni-app'
const userStore = useUserStore()
const tabnav = ref()
const lists = ref([])
const defaulKey = ref('')
const orderList = ref([
  {
    type: '0', //状态值
    name: '全部',
    list: [], //数据
  },
  {
    type: '1', //状态值
    name: '待付款',
    list: [], //数据
  },
  {
    type: '2', //状态值
    name: '待收货',
    list: [], //数据
  },
  {
    type: '4', //状态值
    name: '已取消',
    list: [], //数据
  },
  {
    type: '5', //状态值
    name: '已完成',
    list: [], //数据
  },
])

const selectOrder = async (order_state) => {

  const result = await getOrder({ order_state, user_id: userStore.user.user_id })
  if (result.code === 2000) {
    lists.value = result.data
    console.log(lists.value);
  }
}

// 当前选中的值,获取不同的订单
const ontype = (e) => {
  selectOrder(e.type)
}
onLoad((query) => {
  if (Object.keys(query).length !== 0) {
    let obj = {}
    for (let i in query) {
      obj[decodeURIComponent(i)] = decodeURIComponent(query[i])
    }
    defaulKey.value = obj.order_status
    selectOrder(obj.order_status)
    uni.$on('renderOrder', selectOrder)
  }
})



onUnload(() => {
  uni.$off('renderOrder', selectOrder)
})
</script>

<style lang="scss" scoped>
page {
  background-color: #f0f2f5;
}
</style>
