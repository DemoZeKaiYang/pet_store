<template>
  <uni-section title="我的宠物" type="line" padding titleFontSize="18px">
    <template v-slot:right>
      全部宠物<uni-icons type="right" size="18"></uni-icons>
    </template>
    <!-- 因为swiper特性的关系，请指定swiper的高度 ，swiper的高度并不会被内容撑开-->
    <swiper class="swiper" :indicator-dots="true">
      <swiper-item>
        <uni-grid :showBorder="false" :column="4" :highlight="true" @change="change">
          <uni-grid-item v-for="(item, index) in arr" :index="index" :key="index">
            <view class="grid-item-box" style="background-color: #fff;">
              <!-- <uni-icons type="image" :size="30" color="#777" /> -->
              <img :src="item" alt="" srcset="" />
              <text class="text">jerry</text>
            </view>
          </uni-grid-item>

        </uni-grid>
      </swiper-item>
      <swiper-item>
        <uni-grid :column="4" :highlight="true" @change="change">
          <uni-grid-item v-for="(item, index) in 4" :index="index" :key="index">
            <view class="grid-item-box" style="background-color: #fff;">
              <uni-icons type="image" :size="30" color="#777" />
              <text class="text">文本信息</text>
            </view>
          </uni-grid-item>
        </uni-grid>
      </swiper-item>
      <swiper-item>
        <uni-grid :column="4" :highlight="true" @change="change">
          <uni-grid-item v-for="(item, index) in 4" :index="index" :key="index">
            <view class="grid-item-box" style="background-color: #fff;">
              <uni-icons type="image" :size="30" color="#777" />
              <text class="text">文本信息</text>
            </view>
          </uni-grid-item>
        </uni-grid>
      </swiper-item>
    </swiper>
  </uni-section>
</template>

<script setup>
  //测试数据
  import {
    ref
  } from 'vue'
  const arr = ref(['./static/image/cat1.jpg', './static/image/cat2.jpg', './static/image/cat3.jpg',
    './static/image/dog1.jpg'
  ])
</script>

<style scoped lang="scss">
  .swiper {
    height: 230rpx;
  }

  .grid-item-box {
    width: 187.5rpx;
    height: 180rpx;
    display: flex;
    flex-direction: column;
    align-items: center;
  
    img {
      display: block;
      width: 150rpx;
      height: 150rpx;
      border-radius: 5rpx;
      box-sizing: border-box;
    }

    .text {
      margin-top: 5rpx;
      font-size: 25rpx;
      color: $uni-secondary-color;
    }
  }
</style>