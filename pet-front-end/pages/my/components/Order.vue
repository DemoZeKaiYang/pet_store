<template>
  <view class="content">
    <view class="timer-state">
      <view class="timer">订单编号:{{ orderData.order_number }}</view>
      <view class="state"> {{ orderStatus(orderData.order_status) }} </view>
    </view>
    <view class="image-text" v-for="(item, index) in orderData.orders_goods">
      <view class="main">
        <!-- 文字 -->
        <img :src="`${devUrl}/good_uploads/${item.good_image}`" alt="" />
        <text>{{ item.good_name }}</text>
      </view>
    </view>

    <!-- 商品数量,价钱 -->
    <view class="number-price">
      <view class="num"> 共{{ total }}件商品 </view>
      <view class="price"> 实际付款$ {{ orderData.order_price.toFixed(2) }} </view>
    </view>

    <!-- 操作按钮 -->
    <view class="operation">
      <!-- <button :plain="true" class="btn" >查看物流</button>-->
      <button
        :plain="true"
        class="btn"
        v-if="orderData.order_status === 2"
        @tap="successHanlder(orderData.order_id)"
      >
        确认完成
      </button>
      <button
        :plain="true"
        class="btn"
        v-if="orderData.order_status === 1"
        @tap="cancelHandler(orderData.order_id)"
      >
        取消订单
      </button>
      <button :plain="true" class="btn" v-if="orderData.order_status === 1" @tap="payHandler">
        立即付款
      </button>
    </view>
  </view>
</template>

<script setup>
import { computed, ref } from 'vue'
import { devUrl } from '@/config.js'
import { payAPI, paySuccessAPI } from '@/apis/pay.js'
import { successOrderAPI, cancelOrderAPI } from '@/apis/order.js'
import { onLoad } from '@dcloudio/uni-app'
import { useUserStore } from '@/stores/user'
const props = defineProps(['orderData'])
const userStore = useUserStore()
const total = computed(() => {
  let temp = 0
  props.orderData.orders_goods.forEach((item) => {
    temp += item.good_number
  })
  return temp
})

//支付事件
const payHandler = async () => {
  //获取订单号
  //金额
  let obj = {
    out_trade_no: props.orderData.order_id,
    subject: props.orderData.order_number,
    total_amount: parseFloat(props.orderData.order_price),
  }
  const result = await payAPI(obj)
  if (result.code === 2000) {
    uni.requestPayment({
      provider: 'alipay',
      orderInfo: result.data, // 从后端获取的支付参数
      async success(res) {
        const result1 = await paySuccessAPI({ order_id: props.orderData.order_id })
        if (result1.code === 2000) {
          uni.showToast({
            title: '支付成功',
            icon: 'success',
          })
          //通知父组件重新调用
          uni.$emit('renderOrder', props.orderData.order_status)
        }
      },
      fail(err) {
        uni.showToast({
          title: '支付失败，请联系管理员',
          icon: 'none',
        })
        console.error('支付失败', err)
      },
    })
  }
}

const cancelHandler = async (order_id) => {
  const confirm = await uni.showModal({ title: '提示', content: '确定要取消吗?' })
  if (confirm.confirm) {
    const result = await cancelOrderAPI({
      order_id,
      user_id: userStore.user.user_id,
    })
    if (result.code === 2000) {
      uni.showToast({ title: '取消成功', icon: 'none' })
      uni.$emit('renderOrder', props.orderData.order_status)
    }
  }
}

const successHanlder = async (order_id) => {
  const confirm = await uni.showModal({ title: '提示', content: '确定服务已经完成了吗?' })
  if (confirm.confirm) {
    const result = await successOrderAPI({
      order_id,
      user_id: userStore.user.user_id,
    })
    if (result.code === 2000) {
      uni.showToast({ title: '订单已完成', icon: 'none' })
      console.log({ order_status: props.orderData.order_status })
      uni.$emit('renderOrder', props.orderData.order_status)
    }
  }
}
const orderStatus = (status) => {
  switch (status) {
    case 1:
      return '待付款'
    case 2:
      return '待收货'
    case 4:
      return '已取消'
    case 5:
      return '已完成'

  }
}
onLoad(() => {
  var EnvUtils = plus.android.importClass('com.alipay.sdk.app.EnvUtils')
  EnvUtils.setEnv(EnvUtils.EnvEnum.SANDBOX)
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
        width: 150rpx;
        height: 150rpx;
      }
      text {
        box-sizing: border-box;
        display: inline-block;
        width: 500rpx;
        height: 150rpx;
        margin-left: 50rpx;
        color: #4a4447;
        font-size: 26rpx;
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
    .num {
      width: 450rpx;
      text-align: right;
      line-height: 80rpx;
    }
    .price {
      width: 300rpx;
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
