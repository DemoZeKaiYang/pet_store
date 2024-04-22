<template>
  <uni-section title="我的订单" type="line" padding titleFontSize="18px">
    <!-- <text class="uni-body">这是一个基础卡片示例，此示例展示了一个标题加标题额外信息的标准卡片。</text> -->
    <uni-grid :column="4" :highlight="true" @change="change" :showBorder="false" :square="false">
      <uni-grid-item>
        <view class="grid-item-box" style="background-color: #fff" @tap="gotoOrderDetail(0)" >
          <icon-base type="huodaofukuan" size="50"></icon-base>
          <text class="text">我的订单</text>
        </view>
      </uni-grid-item>
      <uni-grid-item>
        <view class="grid-item-box" style="background-color: #fff" @tap="gotoOrderDetail(1)" >
          <icon-base type="wuliyoutuihuo" size="50"></icon-base>
          <text class="text">待付款</text>
        </view>
      </uni-grid-item>
      <uni-grid-item>
        <view class="grid-item-box" style="background-color: #fff" @tap="gotoAdoptApply" >
          <icon-base type="quanchangbaoyou" size="50"></icon-base>
          <text class="text">领养</text>
        </view>
      </uni-grid-item>
      <uni-grid-item>
        <view class="grid-item-box" style="background-color: #fff" @tap="gotoServiceOrder">
          <icon-base type="zhengguifapiao" size="50" ></icon-base>
          <text class="text">服务订单</text>
        </view>
      </uni-grid-item>
    </uni-grid>
  </uni-section>
</template>

<script setup>
import {reqParams} from '@/utils/reqParams.js'
const gotoOrderDetail=(order_status)=>{
  const url=reqParams('/pages/my/OrderDetail',{order_status})
  uni.navigateTo({url})
}

const gotoServiceOrder=()=>{
  uni.navigateTo({
    url:'/pages/my/ServiceOrder'
  })
}
const gotoAdoptApply=()=>{
  uni.navigateTo({
    url:'/pages/adopt/AdoptApply'
  })
}
</script>

<style scoped>
.grid-item-box {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
