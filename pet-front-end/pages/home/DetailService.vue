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
      <view class="item arrow" @click="openSkuPopup">
        <text class="label" >选择</text>
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

  <view class="sku">
    <vk-data-goods-sku-popup ref="skuPopup" v-model="skuKey" border-radius="20" :localdata="goodsInfo" :mode="skuMode"
      @open="onOpenSkuPopup" @close="onCloseSkuPopup" @add-cart="addCart" @buy-now="buyNow"></vk-data-goods-sku-popup>
  </view>
  
  <!-- 固定购物车 -->
    <view class="goods-carts">
      <uni-goods-nav :options="options" :fill="true" :button-group="buttonGroup" @click="onClick"
        @buttonClick="buttonClick" />
    </view>
</template>

<script setup>
  import {
    
    ref
  } from 'vue'
  import Evaluate from './components/Evaluate.vue'
  import Sku from './components/Sku.vue'


  //显示评论
  const showEvaluate = ref(true)
  // 轮播图背景
  const background = ref(['red', 'blue', 'pink'])
  // 轮播图指示
  const indicatorDots = ref(true)
  //轮播图自动播放
  const autoplay = ref(true)
  //自动切换时间间隔
  const interval = ref(2000)

  //	滑动动画时长
  const duration = ref(500)

  //评论
  const apprises = ref([{
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
  }])


  const changeIndicatorDots = (e) => {
    this.indicatorDots = !this.indicatorDots
  }
  const changeAutoplay = (e) => {
    this.autoplay = !this.autoplay
  }
  const intervalChange = (e) => {
    this.interval = e.target.value
  }
  const durationChange = (e) => {
    this.duration = e.target.value
  }
  const tabChange = () => {
    console.log("tab选择序列 = " + JSON.stringify(t));
  }
  
  
  
  
  
  //sku

  const skuKey = ref(false)
  const skuMode = ref(1)
  const goodsInfo = ref({
    "_id": "002",
    "name": "迪奥香水",
    "goods_thumb": "https://res.lancome.com.cn/resources/2020/9/11/15998112890781924_920X920.jpg?version=20200917220352530",
    "sku_list": [{
        "_id": "004",
        "goods_id": "002",
        "goods_name": "迪奥香水",
        "image": "https://res.lancome.com.cn/resources/2020/9/11/15998112890781924_920X920.jpg?version=20200917220352530",
        "price": 19800,
        "sku_name_arr": ["50ml/瓶"],
        "stock": 100
      },
      {
        "_id": "005",
        "goods_id": "002",
        "goods_name": "迪奥香水",
        "image": "https://res.lancome.com.cn/resources/2020/9/11/15998112890781924_920X920.jpg?version=20200917220352530",
        "price": 9800,
        "sku_name_arr": ["70ml/瓶"],
        "stock": 100
      }
    ],
    "spec_list": [{
      "list": [{
          "name": "20ml/瓶"
        },
        {
          "name": "50ml/瓶"
        },
        {
          "name": "70ml/瓶"
        }
      ],
      "name": "规格"
    }],
  })
  
  const init = (options = {}) => {
  
  }
  const openSkuPopup=()=>{
        skuKey.value=true
  }
  // sku组件 开始-----------------------------------------------------------
  const onOpenSkuPopup = () => {
    console.log("监听 - 打开sku组件");
    
  }
  
  
  const onCloseSkuPopup = () => {
    console.log("监听 - 关闭sku组件");
     
  }
  
  // 加入购物车前的判断
  const addCartFn = () => {
    let {
      selectShop
    } = obj;
    // 模拟添加到购物车,请替换成你自己的添加到购物车逻辑
    let res = {};
    let name = selectShop.goods_name;
    if (selectShop.sku_name != "默认") {
      name += "-" + selectShop.sku_name_arr;
    }
    res.msg = `${name} 已添加到购物车`;
    if (typeof obj.success == "function") obj.success(res);
  }
  
  // 加入购物车按钮
  const addCart = (selectShop) => {
    console.log("监听 - 加入购物车");
    // that.addCartFn({
    //   selectShop: selectShop,
    //   success: function(res) {
    //     // 实际业务时,请替换自己的加入购物车逻辑
    //     that.toast(res.msg);
    //     setTimeout(function() {
    //       that.skuKey = false;
    //     }, 300);
    //   }
    // });
  }
  
  // 立即购买
  const buyNow = (selectShop) => {
    console.log("监听 - 立即购买");
    // that.addCartFn({
    //   selectShop: selectShop,
    //   success: function(res) {
    //     // 实际业务时,请替换自己的立即购买逻辑
    //     that.toast("立即购买");
    //   }
    // });
  }
  const toast = (msg) => {
    uni.showToast({
      title: msg,
      icon: "none"
    });
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
  .sku {
    padding: 30rpx;
    font-size: 28rpx;
  }
  
  
  //购物车
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