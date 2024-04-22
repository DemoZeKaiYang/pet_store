<template>
  <!-- 轮播图 -->
  <view class="">
    <swiper
      class="swiper"
      circular
      :indicator-dots="true"
      :autoplay="autoplay"
      :interval="interval"
      :duration="duration"
    >
      <template v-for="(g, index) in good.good_images">
        <swiper-item v-if="g.good_image_type === 0">
          <view class="swiper-item">
            <image
              class="swiper-img"
              :src="`${devUrl}/good_uploads/` + g.good_image_url"
              mode="scaleToFill"
            ></image>
          </view>
        </swiper-item>
      </template>
    </swiper>
  </view>

  <!-- 价格 描述 -->
  <view class="detail">
    <!-- 价格 -->
    <view class="price">
      <span class="goods-price">￥{{ good.good_price }}</span>
      <span class="goods-origin-price"
        >原价￥<del>{{ good.good_origin_price }}</del></span
      >
    </view>
    <!-- 描述 -->
    <view class="describe">
      <b>{{ good.good_name }}</b>
    </view>
    <!-- 已售 -->
    <view class="rate-num">已售{{ good.good_sold_num }}</view>
  </view>

  <!-- 商品页面 -->
  <view class="goods-list-image">
    <template v-for="(g, index) in good.good_images">

      <img
        :src="`${devUrl}/good_uploads/` + g.good_image_url"
        alt=""
        v-if="g.good_image_type === 1"
        mode="scaleToFill"
      />
    </template>
  </view>

  <!-- 加入购物车或者立即购买 -->
  <view class="goods-carts">
    <uni-goods-nav
      :options="options"
      :fill="true"
      :button-group="buttonGroup"
      @click="onClick"
      @buttonClick="buttonClick"
    />
  </view>
</template>
<script setup>
import { onNavigationBarButtonTap, onLoad, onShow, onBackPress } from '@dcloudio/uni-app'
import { ref } from 'vue'
import request from '@/utils/request'
import { devUrl } from '@/config.js'
import { useCarStore } from '@/stores/car.js'
import { reqParams } from '@/utils/reqParams'
import {getIdGoodAPI}from '@/apis/good.js'
const store = useCarStore()

const options = ref([
  {
    icon: 'cart',
    text: '购物车',
    info: store.carNum,
  },
])
const buttonGroup = ref([
  {
    text: '加入购物车',
    backgroundColor: '#ffa200',
    color: '#fff',
  },
])

const goodId = ref('')
const good = ref({})
const backLayer = () => {
  uni.navigateBack(1)
}
const gotoCar = () => {
  uni.navigateTo({
    url: '/pages/cat/cat',
  })
}
const getData = async () => {
  const result = await getIdGoodAPI(goodId.value)
  if (result.code === 200) {
  
    good.value = result.data
      console.log(good.value);
  }
}
onLoad((query) => {
  if (Object.keys(query).length !== 0) {
    let obj = {}
    for (let i in query) {
      obj[decodeURIComponent(i)] = decodeURIComponent(query[i])
    }
    goodId.value = obj.good_id
    getData()
  }
})

//左侧按钮
const onClick = (e) => {
  uni.navigateTo({
    url: '/pages/car/car',
  })
}
//右侧按钮
const buttonClick = (e) => {
  //跳转到购物车
  if (e.index === 0) {
    store.addGoodInCar(good.value)
    options.value[0].info = store.carNum
  }
  if (e.index === 1) {
  }
}
onShow(() => {
  options.value[0].info = store.carNum
})
</script>
<style lang="scss" scoped>
.swiper {
  height: 500rpx;
}

.swiper-item {
  display: block;
  height: 460rpx;
  width: 100%;
  line-height: 500rpx;
  text-align: center;

  .swiper-img {
    width: 100%;
  }
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
    color: #f7632a;
    margin-right: 10px;
  }

  .describe {
    color: #67686c;
  }
}

.goods-list-image {
  padding: 20rpx;

  img {
    width: 710rpx;
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
