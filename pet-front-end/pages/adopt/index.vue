<template>
  <view class="top">
    <view class="option" v-for="(item, index) in options" :key="index" @click="handlerClick">
      <text :class="{ active: item.isActive }">{{ item.title }}</text>
    </view>
  </view>
  <view class="main">
    <view class="pet-adopt" v-for="i in 4">
      <!-- 图片 -->
      <img :src="devUrl + '/good_uploads/dongganglingshi.png'" alt="" class="pet-img" />
      <!-- 标题 -->
      <view class="title"> 德文卷毛，求领养~</view>
      <!-- 品种，年龄，发布时间 -->
      <view class="describe">
        <!-- 宠物信息 -->
        <view class="">德文卷毛|2个月</view>

        <view class=""> 1天前 </view>
      </view>
    </view>
  </view>

  <uni-fab ref="fab" horizontal="right" vertical="bottom" :popMenu="false" @trigger="trigger" />
</template>

<script setup>
import { ref } from 'vue'
import { devUrl } from '@/config.js'
const options = ref([
  {
    title: '品种',
    isActive: true,
  },

  {
    title: '性别',
    isActive: false,
  },
  {
    title: '年龄',
    isActive: false,
  },
])
const handlerClick=()=>{
  
}
const trigger = () => {
  console.log(1)
}
</script>

<style lang="scss" scoped>
page {
  background-color: #ffffff;
}
.top {
  width: 750rpx;
  height: 100rpx;
  display: flex;
  align-items: center;
  .active {
    color: #ffb600;
    border-bottom: 3px solid #ffb600;
  }
  .option {
    box-sizing: border-box;
    height: 100rpx;
    line-height: 100rpx;
    width: 250rpx;
    display: flex;
    justify-content: center;
    text{
          width: 100rpx;
          text-align: center;
    }
  }
}

.main {
  padding: 0 15rpx;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

  .pet-adopt {
    height: 500rpx;
    width: 320rpx;
    .pet-img {
      border-radius: 10px;
      width: 320rpx;
      height: 320rpx;
    }

    .title {
      margin: 10rpx 0;
      font-size: 32rpx;
    }

    .describe {
      display: flex;
      justify-content: space-between;
      font-size: 24rpx;
      color: #8b8ba9;
    }
  }
}
</style>
