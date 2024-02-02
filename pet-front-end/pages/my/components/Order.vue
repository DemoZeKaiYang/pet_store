<template>
  <view class="content">
    <view class="timer-state ">
      <view class="timer">自己营Apple产品专营店</view>
      <view class="state">
        已取消
      </view>
    </view>
    <view class="image-text ">
      <view class="main">
        <!-- 图片 -->
        <img :src="`./static/image/cat1.jpg`" alt="" />
        <!-- 文字 -->
        <text>Apple苹果iPhone8Plus4G手机深空灰asdasdasdasdasdasdasd移动联通版64G裸机Apple苹果iPhone8Plus4G手机深空灰移动联通版64G裸机</text>
      </view>

    </view>

    <!-- 商品数量,价钱 -->
    <view class="number-price ">
      <view class="num">
        共1件商品
      </view>
      <view class="price">
        实际付款$ 3900.00
      </view>
    </view>

    <!-- 操作按钮 -->
    <view class="operation">
      <button  :plain="true" class="btn" style="">查看物流</button>
      <button  :plain="true"   class="btn">再次购买</button>
      
    </view>

  </view>
</template>

<script setup>
</script>

<style lang="scss" scoped>

  .content { 
    background-color: #ffffff;
    //时间和状态
    .timer-state {
      display: flex;
      height: 80rpx;
      padding: 0 25rpx;
      .timer {
        width: 500rpx;
        line-height: 80rpx;
        height: 80rpx;
      }
      .state {
        width: 200rpx;
        text-align: right;
        color: #999999;
        font-size: 25rpx;
        line-height: 80rpx;
        height: 80rpx;
      }
    }
    // 中间的文本+图片
    .image-text {
      
      background-color: #F7F7F7;
      padding: 25rpx;
      .main {
        display: flex;
        img {
          width: 150rpx;
          height: 150rpx;
        }
        text {
          box-sizing: border-box;
          display: inline-block;
          width: 500rpx;
          height: 150rpx;
          margin-left: 50rpx;
          color:#4A4447;
          font-size: 26rpx;
          overflow: hidden;
        }
      }

    }
    
    // 数量和价格
    .number-price{
      display: flex;
      height: 80rpx;
      box-sizing: border-box;
      border-bottom: 1px solid #F4F4F4;
      font-size: 25rpx;
      .num{
        width: 450rpx;
        text-align: right;
        line-height:  80rpx;
      }
      .price{
        width: 300rpx;
        text-align: center;
        line-height:  80rpx;
      }
    }
    
    .operation{
      
      width: 750rpx;
      height: 100rpx;
      padding: 20rpx 0;
      box-sizing: border-box;
      text-align: right;
      
      .btn{
        display: inline-block;
        width:200rpx;
        height: 60rpx;
        text-align: center;
        line-height: 60rpx;
        border-radius: 40rpx;
        font-size: 28rpx;
        margin-right: 20rpx;
      }
    }
  }
</style>