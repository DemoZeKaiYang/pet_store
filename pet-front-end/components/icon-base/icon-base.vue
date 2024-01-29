<template>
  <view :class="['iconfont',iconName]" :style="{fontSize:size+'rpx',color}"></view>
</template>

<script setup>
  import {
    ref,
    computed
  } from 'vue'

  const props = defineProps(['type', 'size','color'])
  const iconName = computed(() => {
    return `icon-` + props.type
  })
</script>

<style scoped lang="scss">

</style>