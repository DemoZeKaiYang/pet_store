<template>
  <view class="content" v-for="(item, index) in serviceOrderList" :key="item.service_order_id">
    <view class="timer-state">
      <view class="timer">订单编号:{{ item.service_number }}</view>
      <view class="state"> {{ serviceStatus(item.service_status) }} </view>
    </view>
    <view class="image-text">
      <view class="main">
        <!-- 文字 -->
        <img :src="`${devUrl}/service_uploads/${item.service_image}`" alt="" />
        <text>{{ item.service_name }}</text>
      </view>
    </view>

    <!-- 商品数量,价钱 -->
    <view class="number-price">
      <view class="num"> 上门时间:{{ item.service_time }} </view>
      <view class="price"> 实际付款$ {{ item.service_price }} </view>
    </view>

    <!-- 操作按钮 -->
    <view class="operation">
      <button
        :plain="true"
        class="btn"
        @tap="cancelHandler(item.service_order_id)"
        v-if="item.service_status !== 3 && item.service_status !== 4"
      >
        取消订单
      </button>
      <button
        :plain="true"
        class="btn"
        @tap="successHanlder(item.service_order_id)"
        v-if="item.service_status !== 4 && item.service_status !== 3"
      >
        确认完成
      </button>
    </view>
  </view>
</template>

<script setup>
import { computed, ref } from 'vue'
import { devUrl } from '@/config.js'
import { onLoad } from '@dcloudio/uni-app'
import { cancelServiceOrderAPI, getServiceOrder, successServiceOrderAPI } from '@/apis/service.js'
import { useUserStore } from '@/stores/user'

const serviceOrderList = ref([])
const userStore = useUserStore()
const getData = async () => {
  const result = await getServiceOrder({ user_id: userStore.user.user_id })
  if (result.code === 2000) {
    serviceOrderList.value = result.data
  }
}
const cancelHandler = async (service_order_id) => {
  const confirm = await uni.showModal({ title: '提示', content: '确定要取消吗?' })
  if (confirm.confirm) {
    const result = await cancelServiceOrderAPI({
      service_order_id,
      user_id: userStore.user.user_id,
    })
    if (result.code === 2000) {
      uni.showToast({ title: '取消成功', icon: 'none' })
    }
    getData()
  }
}

const successHanlder = async (service_order_id) => {
  const confirm = await uni.showModal({ title: '提示', content: '确定服务已经完成了吗?' })
  if (confirm.confirm) {
    const result = await successServiceOrderAPI({
      service_order_id,
      user_id: userStore.user.user_id,
    })
    if (result.code === 2000) {
      uni.showToast({ title: '订单已完成', icon: 'none' })
    }
    getData()
  }
}

const serviceStatus = (status) => {
  switch (status) {
    case 1:
      return '立即上门'
    case 2:
      return '预约上门'
    case 3:
      return '已取消'
    default:
      return '已完成'
  }
}
onLoad(() => {
  getData()
})
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
    background-color: #f7f7f7;
    padding: 25rpx;
    .main {
      display: flex;
      img {
        border-radius: 10px;
        width: 150rpx;
        height: 150rpx;
      }
      text {
        box-sizing: border-box;
        display: flex;

        align-items: center;
        width: 500rpx;
        height: 150rpx;
        margin-left: 50rpx;
        color: #4a4447;
        font-size: 30rpx;
        overflow: hidden;
      }
    }
  }

  // 数量和价格
  .number-price {
    display: flex;
    height: 80rpx;
    box-sizing: border-box;
    border-bottom: 1px solid #f4f4f4;
    font-size: 25rpx;
    justify-content: space-evenly;
    .num {
      width: 400rpx;
      text-align: right;
      line-height: 80rpx;
    }
    .price {
      width: 350rpx;
      text-align: center;
      line-height: 80rpx;
    }
  }

  .operation {
    width: 750rpx;
    height: 100rpx;
    padding: 20rpx 0;
    box-sizing: border-box;
    text-align: right;

    .btn {
      display: inline-block;
      width: 200rpx;
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
