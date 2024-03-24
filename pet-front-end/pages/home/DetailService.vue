<template>
  <view>
    <swiper
      class="swiper"
      circular
      :indicator-dots="true"
      :autoplay="true"
      :interval="2000"
      :duration="500"
    >
      <template v-for="image in serviceDetail.service_images">
        <swiper-item v-if="image.service_image_type === 1">
          <img
            :src="devUrl + '/service_uploads/' + image.service_image_name"
            alt=""
            model="scaleToFill"
            class="swiper-image"
          />
        </swiper-item>
      </template>
    </swiper>
  </view>
  <!-- 商品 -->
  <view class="goods">
    <!-- 商品简介 -->
    <view class="meta">
      <view class="price">
        <view class="name ellipsis">{{ serviceDetail.service_name }} </view>
        <text class="number"> <text class="symbol">¥</text>{{ serviceDetail.service_price }}</text>
      </view>
      <view class="desc"> {{ serviceDetail.service_detail_describe }} </view>
    </view>

    <!-- 操作面板 -->
    <view class="action">
      <view class="item arrow">
        <text class="label">服务</text>
        <text class="text ellipsis"> 无忧退 快速退款 免费包邮 </text>
      </view>
    </view>
  </view>

  <!-- 选项卡，详情服务，评论 -->
  <view style="margin-top: 20px">
    <view class="detail-info">
      <view class="left" :class="{ active: !showEvaluate }" @tap="showEvaluate = false">
        服务介绍
      </view>
      <view class="right" :class="{ active: showEvaluate }" @tap="showEvaluate = true">
        服务评价
      </view>
    </view>
  </view>

  <Evaluate :service_comments="serviceDetail.service_comments" v-if="showEvaluate"></Evaluate>
  <view v-else>
    <template v-for="image in serviceDetail.service_images">
      <img
        :src="devUrl + '/service_uploads/' + image.service_image_name"
        alt=""
        model="scaleToFill"
        v-if="image.service_image_type === 2"
        style="width: 750rpx; height: 750rpx"
      />
    </template>
  </view>

  <!-- 固定购物车 -->
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
import { computed, ref } from 'vue'
import Evaluate from './components/Evaluate.vue'
import { onLoad } from '@dcloudio/uni-app'
import { getServiceDetailAPI } from '@/apis/service.js'
import { devUrl } from '@/config.js'
import { reqParams } from '@/utils/reqParams.js'
//详细服务的数据
const serviceDetail = ref({})

//配置项
const options = ref([{ icon: 'headphones', text: '客服' }])

//购物车按钮组
const buttonGroup = ref([
  {
    text: '立即上门',
    backgroundColor: '#ffbd23',
    color: '#fff',
  },
  {
    text: '预约上门',
    backgroundColor: '#ffa200',
    color: '#fff',
  },
])
//获取详情信息数据
const getServiceDetailData = async (service_id) => {
  const result = await getServiceDetailAPI(service_id)
  if (result.code === 2000) {
    serviceDetail.value = result.data
    console.log(serviceDetail.value)
  }
}

//显示评论
const showEvaluate = ref(true)

//左侧按钮组事件
const buttonClick = ({ index, content }) => {
  console.log(index, content)

  //立即上门
  const url=reqParams('/pages/home/OrderService', {
    isReserve: index === 1,
  })

  uni.navigateTo({url})
}

onLoad((query) => {
  
  if (Object.keys(query).length !== 0) {
    let obj = {}
    for (let i in query) {
      obj[decodeURIComponent(i)] = decodeURIComponent(query[i])
    }
    getServiceDetailData(obj.service_id)
  }
})
</script>
<style lang="scss" scoped>
.swiper {
  height: 300rpx;
}
.swiper-image {
  height: 300rpx;
  width: 100%;
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
      color: #ea7d83;
      font-size: 34rpx;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 20rpx;
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

      font-size: 50rpx;
      color: #333;
    }

    .desc {
      line-height: 2;
      padding: 0 20rpx 30rpx;
      font-size: 24rpx;
      color: #b8b8b8;
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
    color: #2979ff;
    border-bottom: 3px solid #2979ff;
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
