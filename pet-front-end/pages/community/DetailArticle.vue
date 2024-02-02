<template>
  <view class="content">
    <!--这里的高度应该由图片的高度决定 -->
    <view class="show-image">

      <swiper class="swiper" circular :indicator-dots="true" :autoplay="true" :interval="5000" :duration="500">
        <swiper-item>
          <img :src="`./static/image/cat1.jpg`" alt="" />
        </swiper-item>
        <swiper-item>
          <img :src="`./static/image/cat1.jpg`" alt="" />
        </swiper-item>
        <swiper-item>
          <img :src="`./static/image/cat1.jpg`" alt="" />
        </swiper-item>
      </swiper>
      <!-- 轮播图 -->

    </view>
    <!-- 标题 -->
    <view class="article-section">
      <h4>卖小米啦，有人买小米吗</h4>
      <text>小米14pro16+512一月十二号入的，保修至25年1月12，全套在，送小米耳机，有意者私聊价格，苹果换安占有心用不糖小1n小千机#听总小红</text>
    </view>
  </view>
</template>

<script setup>

</script>

<style lang="scss" scoped>
  // 先占位
  .show-image {
    height: 500rpx;

    .swiper {
      height: 500rpx;
    }

    img {
      width: 750rpx;
      height: 500rpx;
    }
  }

  .article-section {
    padding: 25rpx;
    h4{
      coloir:#333333

    }
    text{
      display: inline-block;
      margin-top: 10px;
    }
  }
</style>