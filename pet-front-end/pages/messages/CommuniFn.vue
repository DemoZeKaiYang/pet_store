<template>
  <view class="com-base">
    <!-- 上方的展示 -->
    <view class="show-icon" :style="{backgroundColor:bgColor}">
     <icon-base :type="type" size="50" :color="icColor"/>
    </view>
    <view class="describe">{{title}}</view>
  </view>
</template>

<script setup>
  defineProps({
    title:String,
    icColor:String,
    type:String,
    bgColor:String
  })
</script>

<style scoped lang="scss">  
  .com-base{
    width: 187.5rpx;
    height: 187.5rpx;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .show-icon{
      width: 100rpx;
      height: 100rpx;
      border-radius: 50rpx;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .describe{
      margin-top: 5px;
      font-size: 20rpx;
    }
  }
</style>