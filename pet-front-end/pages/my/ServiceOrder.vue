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
        v-if="item.service_status !== 3 && item.service_status !== 4&&item.service_status !==5"
      >
        取消订单
      </button>
      <button
        :plain="true"
        class="btn"
        @tap="successHanlder(item.service_order_id)"
        v-if="item.service_status !== 4 && item.service_status !== 3 &&item.service_status !==5"
      >
        确认完成
      </button>
      <button
        :plain="true"
        class="btn"
        @tap="evaluateHandler(item.service_id, item.service_order_id)"
        v-if="item.service_status === 4"
      >
        评价服务
      </button>
    </view>
  </view>

  <uni-popup ref="popup" background-color="#fff" @change="change">
    <view class="popup-content">
      <view class="top">
        <view class="avatar">
          <img :src="imagePrefix + evaData.service_comment_avatar" alt="" />
        </view>
        <view class="eva">
          <view class="name">用户名:{{ evaData.service_comment_name }}</view>
          <view class="star"> <uni-rate v-model="evaData.service_comment_star" /> </view>
        </view>
      </view>
      <view class="bottom">
        <uni-easyinput
          type="textarea"
          v-model="evaData.service_comment_content"
          placeholder="请输入内容"
        ></uni-easyinput>
        <button type="primary" plain style="margin-top: 30rpx" @tap="evaService">评价</button>
      </view>
    </view>
  </uni-popup>
</template>

<script setup>
import { computed, reactive, ref } from 'vue'
import { devUrl } from '@/config.js'
import { onLoad } from '@dcloudio/uni-app'
import {
  cancelServiceOrderAPI,
  getServiceOrder,
  successServiceOrderAPI,
  evalServiceAPI,
} from '@/apis/service.js'
import { useUserStore } from '@/stores/user'
const imagePrefix = ref(devUrl + '/uploads/')
const popup = ref()
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

const getCurrentTime = () => {
  const now = new Date()
  const year = now.getFullYear()
  const month = String(now.getMonth() + 1).padStart(2, '0') // 月份从0开始，所以要加1，并用'0'填充至两位
  const day = String(now.getDate()).padStart(2, '0') // 日期用'0'填充至两位
  return `${year}-${month}-${day}`
}

const evaData = ref({
  service_comment_avatar: userStore.user.user_avatar,
  service_comment_name: userStore.user.user_name,
  service_comment_star: 0,
  service_comment_date: '',
  service_id: '',
  service_comment_content: '',
  service_order: '',
})
const evaluateHandler = (service_id, service_order_id) => {
  popup.value.open('center')
  evaData.value.service_id = service_id
  evaData.value.service_comment_date = getCurrentTime()
  evaData.value.service_order_id = service_order_id
}
//发请求评论

//修改服务订单状态，添加评论
const evaService = async () => {
  const result = await evalServiceAPI(evaData.value)
  
  if (result.code === 2000) {
    uni.showToast({
      title: '评价成功',
    })
    getData()
    evaData.value = {
      service_comment_avatar: userStore.user.user_avatar,
      service_comment_name: userStore.user.user_name,
      service_comment_star: 0,
      service_comment_date: '',
      service_id: '',
      service_comment_content: '',
      service_order: '',
    }
    popup.value.close()

    return
  }
  uni.showToast({
    title: '评价失败',
  })
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

.popup-content {
  border-radius: 20rpx;
  width: 500rpx;
  height: 500rpx;
  padding: 25rpx;
  .top {
    display: flex;
  }
  .avatar {
    width: 100rpx;
    height: 100rpx;

    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }

  .bottom {
    margin-top: 20rpx;
  }
}
</style>
