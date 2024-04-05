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
            <view class="name">
              <text class="text1">{{ orderStore.orderList.address_name }}</text>
              <text class="phones">{{ orderStore.orderList.address_phone }}</text>
            </view>
            <view class="address_name">{{ orderStore.orderList.shipping_address }}</view>
          </view>
        </view>
      </view>
    </view>

    <!-- 商品信息 -->
    <view class="shopping-box">
      <view class="shopping-top">
        <view class="lable-title">商品信息</view>
        <view class="lable-number">共{{ orderStore.goodTotalNumber }}个</view>
      </view>
      <view class="shopping-list">
        <!-- 选中的商品  -->
        <view
          class="shopping-item"
          v-for="(good, index) in orderStore.goodList"
          :key="good.good_id"
        >
          <view class="shopping-img">
            <image :src="`${devUrl}/good_uploads/${good.good_image}`"></image>
          </view>
          <view class="shopping-info">
            <view class="shopping-hd">
              <view class="shopping-title">{{ good.good_category.good_category_name }}</view>
              <view class="shopping-price">￥{{ (good.good_price * good.addNum).toFixed(2) }}</view>
              <view class="shopping-price">x{{ good.addNum }}</view>
            </view>
            <view class="shopping-text">{{ good.good_name }}</view>
          </view>
        </view>
      </view>
      <view class="shopping-top cell-list">
        <view class="cell-left">邮费</view>
        <view class="cell-right">包邮</view>
      </view>
      <view class="end-price">
        <view class="end-label">实付款</view>
        <view class="end-number">￥{{ orderStore.goodSumPrice }}</view>
      </view>
    </view>
    <!-- 订单信息 -->
    <view class="shopping-box">
      <view class="shopping-top">
        <view class="lable-title">订单信息</view>
      </view>
      <view class="shopping-top cell-list">
        <view class="cell-left">订单编号</view>
        <view class="cell-right">{{ orderStore.orderList.order_number }}</view>
      </view>
      <view class="shopping-top cell-list">
        <view class="cell-left">支付方式</view>
        <view class="cell-right">线上支付</view>
      </view>
      <view class="shopping-top cell-list">
        <view class="cell-left">下单时间</view>
        <view class="cell-right">{{ orderStore.orderList.create_date }}</view>
      </view>
    </view>
    <view class="footer-box">
      <view class="footer-content">
        <view class="price-box">
          合计:<view class="price-text">
            <u-icon name="rmb" :bold="true" color="rgb(245, 54, 22)" size="32rpx"></u-icon
            >{{ orderStore.goodSumPrice }}
          </view>
        </view>
        <view class="print-item-entry" style="flex: 2">
          <view
            class="select-box"
            style="padding: 24rpx 60rpx; border-radius: 14rpx"
            @tap="payHandler"
          >
            <view class="selecet-text">支付</view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { devUrl } from '@/config.js'
import request from '@/utils/request'
import { getCurrentTimeFormatted } from '@/utils/getNowTime.js'
import { onLoad } from '@dcloudio/uni-app'
import { useOrderStore } from '@/stores/order.js'
import { payAPI ,paySuccessAPI} from '@/apis/pay.js'

const orderStore = useOrderStore()

//支付事件
const payHandler = async () => {
 
  //获取订单号
  //金额
  let obj = {
    out_trade_no: orderStore.orderList.order_id,
    subject: orderStore.orderList.order_number,
    total_amount: parseFloat(orderStore.orderList.order_price),
  }
  const result = await payAPI(obj)

  if (result.code === 2000) {
    uni.requestPayment({
      provider: 'alipay',
      orderInfo: result.data, // 从后端获取的支付参数
      async success(res) {
        const result1 = await paySuccessAPI({ order_id: orderStore.orderList.order_id })
        if (result1.code === 2000) {
          uni.showToast({
            title: '支付成功',
            icon: 'success',
          })
          uni.navigateBack()
        }
        //去修改订单的状态
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
onLoad(() => {
  var EnvUtils = plus.android.importClass('com.alipay.sdk.app.EnvUtils')
  EnvUtils.setEnv(EnvUtils.EnvEnum.SANDBOX)
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
