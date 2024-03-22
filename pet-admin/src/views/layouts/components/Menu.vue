<template>
  <div>
    <h2 class="title">宠物家园后台管理系统</h2>
    <el-menu
      :default-active="curPath"
      :default-openeds="curOpened"
      class="menu"
      @open="handleOpen"
      @close="handleClose"
      router="true"
    >
      <template v-for="r in routes[0].children" :key="r.path">
        <el-menu-item v-if="!r.children" :index="r.path">
          <el-icon v-if="r.meta.icon">
            <component :is="r.meta.icon"></component>
          </el-icon>
          <span>{{ r.meta.title }}</span>
        </el-menu-item>
        <el-sub-menu v-else :index="r.path">
          <template #title>
            <el-icon v-if="r.meta.icon">
              <component :is="r.meta.icon" />
            </el-icon>
            <span>{{ r.meta.title }}</span>
          </template>
          <el-menu-item
            v-for="r1 in r.children"
            :index="'/' + r.path + '/' + r1.path"
            :key="r1.path"
          >
            <el-icon size="20" v-if="r1.meta.icon">
              <component :is="r1.meta.icon" />
            </el-icon>
            {{ r1.meta.title }}</el-menu-item
          >
        </el-sub-menu>
      </template>
    </el-menu>
  </div>
</template>
<script setup>
import routes from '@/router/routes'
import { useRoute } from 'vue-router'
const route = useRoute()
const curPath = ref('')
const curOpened = ref()
// const handleOpen = (key, keyPath) => {
//   console.log(key, keyPath)
// }
// const handleClose = (key, keyPath) => {
//   console.log(key, keyPath)
// }

watch(
  () => route.path,
  (newValue, oldValue) => {
    curPath.value = route.path
  },
  {
    immediate: true
  }
)
</script>

<style scoped lang="scss">
.title {
  height: 56px;
  line-height: 56px;
  text-align: center;
  font-size: 22px;
}
.menu {
  height: 100%;
}
</style>
