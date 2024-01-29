<template>
  <view class="main">
    <!-- 图片图标 -->
    <view class="left">
      <img :src="`./static/cateatfish.png`" alt="" />
    </view>
    <!-- 文字 -->
    <view class="right">
      上门喂猫1
    </view>
  </view>
</template>

<script>
</script>

<style lang="scss" scoped>
  .main{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 350rpx;
    height:150rpx;
    background-color: #F0F1F5;
    border-radius: 5px;
    .left,.right{
      height: 150rpx;
      text-align: center;
      line-height: 150rpx;
          
    }
    .left{
      width: 150rpx;
      // background-color: blue;
        
      img{
        width: 150rpx;
        height: 150rpx;
      }
    }
    .right{
      width:200rpx ;
      // background-color: pink;
    }
  }
</style>