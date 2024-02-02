<template>
  <view>
    <tab-nav ref="tabnav"  :tabnav="orderList" @ontype_='ontype' :fixed='false'></tab-nav>
    <Order></Order>
  </view>
</template>

<script setup>
  import {
    ref
  } from 'vue'
  import Order from './components/Order.vue'
  const tabnav = ref()
  const orderList = ref([{
    type: '0', //状态值
    name: '全部',
    list: [], //数据
  }, {
    type: '1', //状态值
    name: '待付款',
    list: [], //数据
  }, {
    type: '2', //状态值
    name: '待收货',
    list: [], //数据
  }, {
    type: '3', //状态值
    name: '已完成',
    list: [], //数据
  }, {
    type: '4', //状态值
    name: '售后',
    list: [], //数据
  }])


  // 当前选中的值
  const ontype = (e) => {
    console.log(e); //
  }
</script>

<style lang="scss" scoped>
  page{
    background-color:#F0F2F5;
  }

</style>