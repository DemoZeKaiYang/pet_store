<template>
  <div class="common-layout">
    <el-container>
      <el-aside><Menu></Menu></el-aside>
      <el-container>
        <el-header><LayoutHeader></LayoutHeader></el-header>
        <el-main><router-view></router-view></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import { useSocketStore } from '@/stores/socket'
import Menu from './components/Menu.vue'
import LayoutHeader from './components/LayoutHeader.vue'
</script>

<style scoped lang="scss">
.common-layout {
  height: 100%;
  width: 100%;
}
.el-container {
  width: 100%;
  height: 100%;
}
</style>
