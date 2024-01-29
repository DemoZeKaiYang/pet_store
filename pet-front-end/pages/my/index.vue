<template>
  
  <PersonInfo></PersonInfo>
  <Order></Order>
  <MyPet></MyPet>
<MoreFunction></MoreFunction>
</template>

<script setup>
  import {
    ref
  } from 'vue'
  import PersonInfo from './components/PersonInfo.vue'
  import Order from './components/Order.vue'
  import MyPet from './components/MyPet.vue'
  import MoreFunction from './components/MoreFunction.vue'
</script>

<style lang="scss" scoped>

</style>