<template>
  <view class="pay-page">
    <!-- 展示默认地址 -->
    <view class="order_address" @tap="selectAddress"  v-if="showAddress">
      <view class="address_box" >
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
      <view class="address-text" @tap="jumpAddress">添加收货地址</view>
    </view>
    <!-- 商品信息 -->
    <view class="shopping-box">
      <view class="shopping-top">
        <view class="lable-title">已选择的服务</view>
      </view>
      <view class="shopping-list">
        <!-- 对应的服务  -->
        <view class="shopping-item">
          <view class="shopping-img">
            <image :src="`${devUrl}/service_uploads/${serviceStore.service.service_image}`"></image>
          </view>
          <view class="shopping-info">
            <view class="shopping-hd">
              <view class="shopping-title">{{ serviceStore.service.service_name }}</view>
              <!-- .toFixed(2) -->
              <view class="shopping-price">￥{{ serviceStore.service.service_price }}</view>
            </view>
            <view class="shopping-text">{{ serviceStore.service.service_detail_describe }}</view>
          </view>
        </view>
      </view>
    </view>

    <!-- 服务时间 -->
    <view class="shopping-box">
      <view class="shopping-top">
        <view class="lable-title">上门服务时间</view>
      </view>
      <!-- 如果是点击立即上门，展示为立即上门，如果点击预约，展示时间选择器 -->
      <view>
        <uni-datetime-picker
          type="datetime"
          v-model="datetimesingle"
          @change="changeLog"
          :start="start"
          :disabled="!isReserve"
        />
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
        <view class="cell-right">线下支付</view>
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
            >{{ serviceStore.service.service_price }}
          </view>
        </view>
        <view class="print-item-entry" style="flex: 2">
          <view
            class="select-box"
            style="padding: 24rpx 60rpx; border-radius: 14rpx"
            @tap="payHandler"
          >
            <view class="selecet-text">下单</view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue'
import { devUrl } from '@/config.js'
import { getDefaultAddressAPI } from '@/apis/address.js'
import { useUserStore } from '@/stores/user'
import { getCurrentTimeFormatted } from '@/utils/getNowTime.js'
import { onLoad,onShow } from '@dcloudio/uni-app'
import { confirmServiceAPI } from '@/apis/service.js'
import { useServiceStore } from '@/stores/service.js'

//日期时间
const datetimesingle = ref()
const serviceStore = useServiceStore()
const isReserve = ref(false)
//时间不能少于
const start = computed(() => {
  const now = new Date()
  const year = now.getFullYear()
  const month = String(now.getMonth() + 1).padStart(2, '0')
  const date = String(now.getDate()).padStart(2, '0')
  return `${year}-${month}-${date}`
})
const userStore = useUserStore()

const address = ref({})
const showAddress = ref(true)
const orderTime = ref('')
const orderNumber = ref(0)
const getDefaultAddress = async () => {
  const result = await getDefaultAddressAPI(userStore.user.user_id)
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
    url: '/pages/home/ComfirmAddress',
  })
}
//修改地址
const updateAddress = (obj) => {
  address.value = obj
}

//确认订单
const payHandler = async () => {
  // 校验地址
  if (Object.keys(address.value).length===0) return uni.showToast({ title: '请检查您的地址', icon: 'none' })

  // 校验订单,校验不能为空
  if (Object.keys(serviceStore.service).length <= 0)
    return uni.showToast({ title: '请检查您选择的服务', icon: 'none' })

  if (!datetimesingle.value) return uni.showToast({ title: '请检查您预约服务时间', icon: 'none' })

  uni.showModal({
    title: '提示',
    content: '确认要下单吗？',
    async success(res) {
      if (res.confirm) {
        // 封装数据，用户id
        let obj = {
          service_id: serviceStore.service.service_id,
          service_name: serviceStore.service.service_name,
          service_price: serviceStore.service.service_price,
          service_time: datetimesingle.value, //商品数据
          service_number: orderNumber.value, //用户id
          service_date: orderTime.value,
          service_address_name: address.value.address_name,
          service_address_phone: address.value.address_phone,
          service_address: address.value.address_area + address.value.address_details, //地址
          service_status: isReserve ? 2 : 1,
          user_id: userStore.user.user_id,
          service_image:serviceStore.service.service_image
        }
        const result = await confirmServiceAPI(obj)
        if (result.code === 2000) {
          uni.showToast({
            title: '下单成功',
          })
          uni.switchTab({ url: '/pages/home/index' })
        }
      }
    },
  })
}

//支付处理
onMounted(() => {
  orderTime.value = getCurrentTimeFormatted()
  getOrderNum()
  getDefaultAddress()
})
onLoad((query) => {
  if (Object.keys(query).length !== 0) {
    let obj = {}
    for (let i in query) {
      obj[decodeURIComponent(i)] = decodeURIComponent(query[i])
    }
    isReserve.value = obj.isReserve === 'true'
    if (!isReserve.value) {
      datetimesingle.value = new Date()
    }
  }
  uni.$on('confirmAddress',(item)=>{
    address.value=item
  })
  uni.$on('renderAdd',getDefaultAddress)
})


const jumpAddress=()=>{
  uni.navigateTo({
    url: '/pages/my/EditAddress',
  })
}
  
// onShow(()=>{
//   getDefaultAddress()
// })
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
    width: 500rpx;
    margin-top: 10rpx;
    font-size: 24rpx;
    color: #999;
    white-space: nowrap; /* 防止文本换行 */
    overflow: hidden; /* 隐藏超出容器的文本 */
    text-overflow: ellipsis; /* 显示省略号 */
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
