<template>
  <view>
    <swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval"
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
  <!-- 商品 -->
  <view class="goods">
    <!-- 商品简介 -->
    <view class="meta">
      <view class="price">
        <text class="symbol">¥</text>
        <text class="number">29.90</text>
      </view>
      <view class="name ellipsis">云珍·轻软旅行长绒棉方巾 </view>
      <view class="desc"> 轻巧无捻小方巾，旅行便携 </view>
    </view>

    <!-- 操作面板 -->
    <view class="action">
      <view class="item arrow">
        <text class="label">选择</text>
        <!-- <text class="text ellipsis"> 请选择商品规格 </text> -->
      </view>
      <view class="item arrow">
        <text class="label">服务</text>
        <text class="text ellipsis"> 无忧退 快速退款 免费包邮 </text>
      </view>
    </view>
  </view>

  <!-- 选项卡，详情服务，评论 -->
  <view style="margin-top: 20px;">
    <view class="detail-info">
      <view class="left" :class="{active:!showEvaluate}" @tap="showEvaluate=false">
        服务介绍
      </view>
      <view class="right" :class="{active:showEvaluate}" @tap="showEvaluate=true">
        服务评价
      </view>
    </view>
  </view>
  <Evaluate :apprises="apprises" v-if="showEvaluate"></Evaluate>
  <view v-else>
    我是服务介绍
  </view>

<!-- Sku -->
<Sku ></Sku>


</template>

<script>
  import Evaluate from './components/Evaluate.vue'
  import Sku from './components/Sku.vue'
  export default {
    components: {
      Evaluate,
      Sku
    },
    data() {
      return {
        showEvaluate:true,
        background: ['red', 'blue', 'pink'],
        indicatorDots: true,
        autoplay: true,
        interval: 2000,
        duration: 500,
        apprises: [{
          avatarUrl: '', //头像
          name: '小红', //昵称
          commentStar: 5, //评分
          commentDate: '2023-06-09 15:00:00', //时间
          teachLevel: '一段简介', //描述简介
          appraises: ['认真敬业', '场地好', '热情周到'] // 标签
        }, {
          avatarUrl: '',
          name: '小明',
          commentStar: 5,
          commentDate: '2023-06-09 15:00:00',
          teachLevel: '一段简介',
          appraises: ['认真敬业', '场地好', '热情周到']
        }, {
          avatarUrl: '',
          name: '小黑',
          commentStar: 5,
          commentDate: '2023-06-09 15:00:00',
          teachLevel: '一段简介',
          appraises: ['认真敬业', '场地好', '热情周到']
        }, {
          avatarUrl: '',
          name: '小红',
          commentStar: 5,
          commentDate: '2023-06-09 15:00:00',
          teachLevel: '一段简介',
          appraises: ['认真敬业', '场地好', '热情周到']
        }, {
          avatarUrl: '',
          name: '小明',
          commentStar: 5,
          commentDate: '2023-06-09 15:00:00',
          teachLevel: '一段简介',
          appraises: ['认真敬业', '场地好', '热情周到']
        }, {
          avatarUrl: '',
          name: '小黑',
          commentStar: 5,
          commentDate: '2023-06-09 15:00:00',
          teachLevel: '一段简介',
          appraises: ['认真敬业', '场地好', '热情周到']
        }]

      }
    },
    methods: {
      changeIndicatorDots(e) {
        this.indicatorDots = !this.indicatorDots
      },
      changeAutoplay(e) {
        this.autoplay = !this.autoplay
      },
      intervalChange(e) {
        this.interval = e.target.value
      },
      durationChange(e) {
        this.duration = e.target.value
      },
      tabChange() {

        console.log("tab选择序列 = " + JSON.stringify(t));
      }
    }
  }
</script>
<style lang="scss" scoped>
  .swiper {
    height: 300rpx;
  }

  .swiper-item {
    display: block;
    height: 300rpx;
    line-height: 300rpx;
    text-align: center;
  }

  .swiper-list {
    margin-top: 40rpx;
    margin-bottom: 0;
  }


  .goods {
    background-color: #fff;

    .preview {
      height: 750rpx;
      position: relative;

      .indicator {
        height: 40rpx;
        padding: 0 24rpx;
        line-height: 40rpx;
        border-radius: 30rpx;
        color: #fff;
        font-family: Arial, Helvetica, sans-serif;
        background-color: rgba(0, 0, 0, 0.3);
        position: absolute;
        bottom: 30rpx;
        right: 30rpx;

        .current {
          font-size: 26rpx;
        }

        .split {
          font-size: 24rpx;
          margin: 0 1rpx 0 2rpx;
        }

        .total {
          font-size: 24rpx;
        }
      }
    }

    .meta {
      position: relative;
      border-bottom: 1rpx solid #eaeaea;

      .price {
        height: 130rpx;
        padding: 25rpx 30rpx 0;
        color: #fff;
        font-size: 34rpx;
        box-sizing: border-box;
        background-color: #2979FF;
      }

      .number {
        font-size: 56rpx;
      }

      .brand {
        width: 160rpx;
        height: 80rpx;
        overflow: hidden;
        position: absolute;
        top: 26rpx;
        right: 30rpx;
      }

      .name {
        max-height: 88rpx;
        line-height: 1.4;
        margin: 20rpx;
        font-size: 32rpx;
        color: #333;
      }

      .desc {
        line-height: 1;
        padding: 0 20rpx 30rpx;
        font-size: 24rpx;
        color: #cf4444;
      }
    }

    .action {
      padding-left: 20rpx;

      .item {
        height: 90rpx;
        padding-right: 60rpx;
        border-bottom: 1rpx solid #eaeaea;
        font-size: 26rpx;
        color: #333;
        position: relative;
        display: flex;
        align-items: center;

        &:last-child {
          border-bottom: 0 none;
        }
      }

      .label {
        width: 60rpx;
        color: #898b94;
        margin: 0 16rpx 0 10rpx;
      }

      .text {
        flex: 1;
        -webkit-line-clamp: 1;
      }
    }
  }

  /* 商品详情 */
  .detail {
    padding-left: 20rpx;

    .content {
      margin-left: -20rpx;
    }

    .properties {
      padding: 0 20rpx;
      margin-bottom: 30rpx;

      .item {
        display: flex;
        line-height: 2;
        padding: 10rpx;
        font-size: 26rpx;
        color: #333;
        border-bottom: 1rpx dashed #ccc;
      }

      .label {
        width: 200rpx;
      }

      .value {
        flex: 1;
      }
    }
  }



  .detail-info {
    height: 100rpx;
    display: flex;
    width: 750px;

    .right,
    .left {
      width: 350rpx;
      text-align: center;

      height: 100%;
      line-height: 100rpx;
      margin-left: 15rpx;
      color: #999999;
    }

    .active {
      color: #2979FF;
      border-bottom: 3px solid #2979FF;
    }
  }
</style>