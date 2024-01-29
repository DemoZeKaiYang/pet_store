<template>
  <view class="main" >
    {{title}}
  </view>
</template>

<script setup>
      
    defineProps({
      title:String,
    })
</script>

<style lang="scss" scoped>
  .main{
    width: 150rpx;
    height: 60rpx;
    background-color:#F0F1F5;
    color: #4B4C50;
    border-radius: 3px;
    text-align: center;
    line-height: 60rpx;
      
    &:nth-child(5n){
      margin-top: 20rpx;
    }
  }
  .selected{
    background-color: #2979FF;
    color: white;
  }
</style>