<template>
  <view class="pay-page">
    <!-- 展示默认地址 -->
    <view class="order_address" @tap="selectAddress">
      <view class="address_box">
        <view class="weizhi_icon">
          <icon-base type="dizhiguanli" :color="'#2979FF'" :size="50"></icon-base>
        </view>
        <!-- 编辑地址 -->
        <view>
          <view class="center">
            <!-- 默认 -->
            <view class="moren" v-if="address.address_default == 1">
              <icon-base type="moren" :color="'#2979FF'" :size="100"></icon-base>
            </view>
            <view class="name">
              <text class="text1">{{ address.address_name }}</text>
              <text class="phones">{{ address.address_phone }}</text>
            </view>
            <view class="address_name"
              >{{ address.address_area }}{{ address.address_details }}</view
            >
          </view>
        </view>
      </view>
    </view>

    <view class="address-box" v-if="!showAddress">
      <view class="address-icon"
        ><u-icon name="plus-circle" color="#999" size="36rpx"></u-icon
      ></view>
      <view class="address-text">添加收货地址</view>
    </view>
    <!-- 商品信息 -->
    <view class="shopping-box">
      <view class="shopping-top">
        <view class="lable-title">商品信息</view>
        <view class="lable-number">共{{ carStore.checkOutNum }}个</view>
      </view>
      <view class="shopping-list">
        <!-- 选中的商品  -->
        <view class="shopping-item" v-for="(c, index) in carStore.checkOutCar" :key="c.good_id">
          <view class="shopping-img">
            <image :src="`${devUrl}/good_uploads/${c.good_image}`"></image>
          </view>
          <view class="shopping-info">
            <view class="shopping-hd">
              <view class="shopping-title">{{ c.good_category.good_category_name }}</view>
              <view class="shopping-price">￥{{ (c.good_price * c.addNum).toFixed(2) }}</view>
              <view class="shopping-price">x{{ c.addNum }}</view>
            </view>
            <view class="shopping-text">{{ c.good_name }}</view>
          </view>
        </view>
      </view>
      <view class="shopping-top cell-list">
        <view class="cell-left">邮费</view>
        <view class="cell-right">包邮</view>
      </view>
      <view class="end-price">
        <view class="end-label">实付款</view>
        <view class="end-number">￥{{ carStore.sumPrice }}</view>
      </view>
    </view>
    <!-- 订单信息 -->
    <view class="shopping-box">
      <view class="shopping-top">
        <view class="lable-title">订单信息</view>
      </view>
      <view class="shopping-top cell-list">
        <view class="cell-left">订单编号</view>
        <view class="cell-right">{{ orderNumber }}</view>
      </view>
      <view class="shopping-top cell-list">
        <view class="cell-left">支付方式</view>
        <view class="cell-right">线上支付</view>
      </view>
      <view class="shopping-top cell-list">
        <view class="cell-left">下单时间</view>
        <view class="cell-right">{{ orderTime }}</view>
      </view>
    </view>
    <view class="footer-box">
      <view class="footer-content">
        <view class="price-box">
          合计:<view class="price-text">
            <u-icon name="rmb" :bold="true" color="rgb(245, 54, 22)" size="32rpx"></u-icon
            >{{ carStore.sumPrice }}
          </view>
        </view>
        <view class="print-item-entry" style="flex: 2">
          <view
            class="select-box"
            style="padding: 24rpx 60rpx; border-radius: 14rpx"
            @tap="payHandler"
          >
            <view class="selecet-text">确认订单</view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useCarStore } from '@/stores/car.js'
import { devUrl } from '@/config.js'
import request from '@/utils/request'
import { useUserStore } from '@/stores/user'
import { getCurrentTimeFormatted } from '@/utils/getNowTime.js'
import { onLoad } from '@dcloudio/uni-app'
import { confirmOrder } from '@/apis/order'
import { useOrderStore } from '@/stores/order.js'
const carStore = useCarStore()
const userStore = useUserStore()
const orderStore = useOrderStore()
const address = ref({})
const showAddress = ref(true)
const orderTime = ref('')
const orderNumber = ref(0)
const getDefaultAddress = async () => {
  const result = await request('/address/default', { user_id: userStore.user.user_id })
  if (result.code === 1000) {
    showAddress.value = true
    address.value = result.data
  } else {
    showAddress.value = false
  }
}
//订单编号
const getOrderNum = () => {
  const now = new Date()
  const year = now.getFullYear()
  const month = String(now.getMonth() + 1).padStart(2, '0') // 月份从0开始，所以要加1，并用'0'填充至两位
  const day = String(now.getDate()).padStart(2, '0') // 日期用'0'填充至两位
  orderNumber.value = Number(
    year + month + day + (Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000)
  )
}

//选择地址
const selectAddress = () => {
  uni.navigateTo({
    url: '/pages/car/ConfirmAddress',
  })
}
//修改地址
const updateAddress = (obj) => {
  address.value = obj
}

//确认订单
const payHandler = async () => {
  // 校验地址
  if (!address.value) {
    return uni.showToast({ title: '请检查您的地址', icon: 'none' })
  }
  // 校验订单,校验不能为空
  if (!carStore.checkOutCar) {
    return uni.showToast({ title: '请检查您的商品', icon: 'none' })
  }
  // 封装数据，用户id
  let obj = {
    shipping_address: address.value.address_area + address.value.address_details, //地址
    address_name:address.value.address_name,
    address_number:address.value.address_phone,
    goodList: carStore.checkOutCar, //商品数据
    user_id: userStore.user.user_id, //用户id
    create_date: orderTime.value,
    order_number: orderNumber.value,
  }
  const result = await confirmOrder(obj)
  if (result.code === 2000) {
    //对后端返回的订单存储到orderStore中
    orderStore.updateOrder(result.data)

    //清除购物车
    const good_id_arr = orderStore.orderList.goodList.map((item) => item.good_id)
    if (good_id_arr.length > 0) {
      good_id_arr.forEach((item) => {
        carStore.deleteGoods(item)
      })
    }
    uni.showToast({ title: '订单确认成功', icon: 'none' })
    //跳转支付页面
    uni.navigateTo({
      url: '/pages/car/pay',
    })
    
  } else {
    return uni.showToast({ title: '确认订单失败,请联系客服', icon: 'none' })
  }
}

//支付处理
onMounted(() => {
  orderTime.value = getCurrentTimeFormatted()
  getOrderNum()
  getDefaultAddress()
})
onLoad(() => {
  uni.$on('confirmAddress', updateAddress)
})
</script>

<style lang="scss" scoped>
.pay-page {
  padding: 30rpx 30rpx 160rpx 30rpx;
  background: #f8f8f8;
  display: flex;
  flex-direction: column;

  .address-box {
    padding: 20rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 14rpx;
    background: #fff;
  }

  .address-text {
    font-size: 28rpx;
    color: #000;
    margin-left: 10rpx;
  }

  .shopping-box {
    margin-top: 20rpx;
    border-radius: 14rpx;
    display: flex;
    flex-direction: column;
    background: #fff;
    padding: 20rpx 0;
  }

  .lable-title {
    font-size: 32rpx;
    font-weight: 600;
    color: #000;
    padding: 10rpx 24rpx;
    border-bottom: 2rpx solid rgb(248, 248, 248);
  }

  .shopping-list {
    display: flex;
    flex-direction: column;
    padding: 0 24rpx;
  }

  .lable-number {
    font-size: 24rpx;
    color: #999;
    padding-right: 24rpx;
  }

  .shopping-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .shopping-item {
    display: flex;
    padding: 20rpx 0;
    border-bottom: 2rpx solid rgb(248, 248, 248);
  }

  .shopping-img {
    height: 100rpx;
    width: 100rpx;

    image {
      width: 100%;
      height: 100%;
    }
  }

  .shopping-info {
    flex: 1;
    margin-left: 20rpx;
    display: flex;
    flex-direction: column;
  }

  .shopping-hd {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .shopping-title {
    flex: 1;
  }

  .shopping-price {
    width: 120rpx;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    color: rgb(245, 54, 22);
    font-size: 28rpx;
    font-weight: 600;
  }

  .shopping-text {
    margin-top: 10rpx;
    font-size: 24rpx;
    color: #999;
  }
}

.end-price {
  padding: 24rpx;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.end-label {
  font-size: 24rpx;
  color: #000;
}

.end-number {
  color: rgb(245, 54, 22);
  font-size: 28rpx;
  font-weight: 600;
}
.footer-box {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 140rpx;
  background: #fff;
  display: flex;
  border-top: 1rpx solid rgb(214, 215, 217);
  .footer-content {
    padding: 24rpx;
    display: flex;
    align-items: center;
    // margin-bottom: 60rpx;
    flex: 1;
  }

  .price-box {
    flex: 1;
    display: flex;
    align-items: center;
  }

  .price-text {
    display: flex;
    align-items: center;
    color: rgb(245, 54, 22);
    font-weight: 600;
    font-size: 32rpx;
  }
}
.print-item-entry {
  display: flex;
  align-items: center;
  // flex: 1;
  flex-wrap: wrap;
  justify-content: flex-end;
}
.select-box {
  // width: 200rpx;
  display: flex;
  align-items: center;
  background: rgb(245, 54, 22);
  padding: 10rpx 30rpx;
  border-radius: 10rpx;
  margin-left: 20rpx;
  justify-content: center;

  .selecet-text {
    color: #fff;
    font-size: 42rpx;
  }

  .selecet-icon {
    margin-left: 4rpx;
  }
}
.cell-left {
  font-size: 24rpx;
  color: #000;
}
.cell-list {
  padding: 30rpx 24rpx;
  border-bottom: 1rpx solid rgb(214, 215, 217);
}

//地址的css
.order_address {
  height: 180upx;
  width: 100%;
  background-color: #fff;
  border-radius: 10upx;
  position: relative;
  box-shadow: 0upx 0upx 10upx #ddd;
  margin-bottom: 20upx;
}

.order_address image {
  width: 100%;
  height: 100%;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
}

.address_box {
  width: 100%;
  height: 100%;
  display: block;
  z-index: 10;
  box-sizing: border-box;
  padding: 20upx;
  display: flex;
  align-items: center;
}

.weizhi_icon text {
  font-size: 40upx;
  margin-left: 10upx;
}

.address_box .center {
  margin-left: 20upx;
}

.address_box .center .name {
  height: 60upx;
  line-height: 60upx;
}

.address_box .center .name .text1 {
  font-size: 26upx;
  font-weight: bold;
  color: #333;
  display: inline-block;
  margin-right: 20upx;
}

.phones {
  font-size: 24upx;
  color: #999;
  z-index: 0;
}

.address_box .address_name {
  font-size: 26upx;
  font-weight: bold;
  color: #333;
  // overflow: hidden;
  white-space: nowrap;
  /* 不允许文本换行 */
  overflow: hidden;
  /* 隐藏超出容器的部分 */
  text-overflow: ellipsis;
  /* 当文本溢出时显示省略号 */
  width: 500rpx;
}
.moren {
  position: absolute;
  top: 0;
  left: 0;
}

.moren text {
  font-size: 60upx;
}

.addAddress {
  position: fixed;
  left: 10%;
  bottom: 10%;
  width: 80%;
  height: 100rpx;
  border-radius: 20px;
  font-size: 40rpx;
}
</style>
