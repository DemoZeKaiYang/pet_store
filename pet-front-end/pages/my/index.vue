<template>
  
  <PersonInfo></PersonInfo>
  <OrderList></OrderList>
  <MyPet></MyPet>
<MoreFunction></MoreFunction>
</template>

<script setup>
  import {
    ref
  } from 'vue'
  import PersonInfo from './components/PersonInfo.vue'
  import OrderList from './components/OrderList.vue'
  import MyPet from './components/MyPet.vue'
  import MoreFunction from './components/MoreFunction.vue'
</script>

<style lang="scss" scoped>

</style>