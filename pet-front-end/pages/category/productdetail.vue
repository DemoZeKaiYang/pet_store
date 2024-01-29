<template>


  <uni-nav-bar statusBar="false" left-icon="left" right-icon="cart" color="white" title="" background-color="#007AFF"
    @clickLeft="backLayer"  @clickRight="gotoCat"/>




  <!-- 轮播图 -->
  <view class="">
    <swiper class="swiper" circular :indicator-dots="true" :autoplay="autoplay" :interval="interval"
      :duration="duration">
      <swiper-item>
        <view class="swiper-item uni-bg-red">A</view>
      </swiper-item>
      <swiper-item>
        <view class="swiper-item uni-bg-green">B</view>
      </swiper-item>
      <swiper-item>
        <view class="swiper-item uni-bg-blue">C</view>
      </swiper-item>
    </swiper>
  </view>

  <!-- 价格 描述 -->
  <view class="detail">
    <!-- 价格 -->
    <view class="price">
      <span class="goods-price">￥22.9</span>
      <span class="goods-origin-price">原价￥<del>29.9</del></span>
    </view>
    <!-- 描述 -->
    <view class="describe">
      <b>麦德氏In-Vet医护系列益生菌25g/盒</b>
    </view>
    <!-- 已售 -->
    <view class="rate-num">已售41</view>
  </view>

  <!-- 商品页面 -->
  <view class="goods-list-image">
    <img src="/static/image/longPic1.jpg" alt="" />
    <img src="/static/image/longPic.jpg" alt="" />
  </view>

  <!-- 加入购物车或者立即购买 -->
  <view class="goods-carts">
    <uni-goods-nav :options="options" :fill="true" :button-group="buttonGroup" @click="onClick"
      @buttonClick="buttonClick" />
  </view>
</template>
<script setup>
  import {
    onNavigationBarButtonTap
  } from '@dcloudio/uni-app'
  const backLayer = () => {
    uni.navigateBack()
  }
    
  const gotoCat=()=>{
    uni.navigateTo({
      url:"/pages/cat/cat"
    })
  }
</script>
<style lang="scss">
  .swiper {
    height: 500rpx;
  }

  .swiper-item {
    display: block;
    height: 500rpx;
    line-height: 500rpx;
    text-align: center;
  }

  .swiper-list {
    margin-top: 40rpx;
    margin-bottom: 0;
  }

  .detail {
    width: 750rpx;
    padding: 0 5px;

    .price,
    .describe,
    .rate-num {
      margin-top: 10px;
    }

    .goods-price {
      font-size: 20px;
      color: #F7632A;
      margin-right: 10px;
    }

    .describe {
      color: #67686C;
    }
  }

  .goods-list-image {

    img {
      width: 750rpx;
    }
  }

  .goods-carts {
    /* #ifndef APP-NVUE */
    display: flex;
    /* #endif */
    flex-direction: column;
    position: fixed;
    left: 0;
    right: 0;
    /* #ifdef H5 */
    left: var(--window-left);
    right: var(--window-right);
    /* #endif */
    bottom: 0;
  }
</style>