<template>
  <view class="main">
    <!-- 图片图标 -->
    <view class="left">
      <img :src="imageUrl" alt="" />
    </view>
    <!-- 文字 -->
    <view class="right">
      {{ title }}
    </view>
  </view>
</template>

<script setup>
import { devUrl } from '@/config.js'
import { computed ,ref} from 'vue'
const props=defineProps(['title', 'imgurl'])
const prefix = ref('')
const imageUrl = computed(() => {
  return devUrl + '/service_uploads/' + props.imgurl
})
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 350rpx;
  height: 150rpx;
  background-color: #f0f1f5;
  border-radius: 5px;
  .left,
  .right {
    height: 150rpx;
    text-align: center;
    line-height: 150rpx;
  }
  .left {
    width: 150rpx;
    // background-color: blue;

    img {
      width: 150rpx;
      height: 150rpx;
    }
  }
  .right {
    width: 200rpx;
    // background-color: pink;
  }
}
</style>
