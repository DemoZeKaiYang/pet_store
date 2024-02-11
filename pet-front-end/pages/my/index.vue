<template>

  <PersonInfo></PersonInfo>
  <OrderList></OrderList>
  <MyPet></MyPet>
  <MoreFunction></MoreFunction>
  <button type="primary" class="loginout" @tap="loginOut">退出登录</button>
</template>

<script setup>
  import {
    ref,
    onMounted
  } from 'vue'
  import PersonInfo from './components/PersonInfo.vue'
  import OrderList from './components/OrderList.vue'
  import MyPet from './components/MyPet.vue'
  import MoreFunction from './components/MoreFunction.vue'
  import requrest from '@/utils/request.js'
  import {
    useUserStore
  } from '@/stores/user.js'

  const store = useUserStore();
  const loginOut = () => {
    store.resetUser()
    try {
      uni.removeStorageSync('token');
      uni.removeStorageSync('user');
    } catch (e) {
      console.log(e);
      //TODO handle the exception
    }
    uni.switchTab({
      url: '/pages/home/index'
    })
  }
</script>

<style lang="scss" scoped>
  .loginout {
    margin-top: 40rpx;
    border-radius: 20px;
  }
</style>