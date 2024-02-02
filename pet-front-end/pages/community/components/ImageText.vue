<template>
  <view class="total">
    <view class="left">
      <view class="top">2020数字中国创新大赛-数字政府赛道21强出炉，四大赛题紧贴政府数字化发展需求</view >
      <view class="bto">
          <view class="author">
            36氟深度服
          </view>
          <view class="timer">
            务2020-04-1117:03:18
          </view>
      </view>
    </view>
    <view class="right">
      <img :src="`./static/image/cat1.jpg`" alt="" />
    </view>
    
  </view>
</template>

<script setup>
</script>

<style lang="scss" scoped>
  // 740
  // 440
  .total{
    background-color: #FFFFFF;
    padding: 20rpx;
    width: 750rpx;
    display: flex;
    height: 210rpx;
    
    .left{
      width: 410rpx;
      .top{
        height: 160rpx;
      }
      .bto{
        display: flex;
        font-size: 24rpx;
        color: #ACACAC;
        height: 50rpx;
      
      }
    }
    .right{
      img{
        width: 300rpx;
        height: 200rpx;
        border-radius: 10rpx;
      }
    }
  }
</style>