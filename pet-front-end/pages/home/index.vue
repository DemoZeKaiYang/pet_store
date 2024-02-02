<template>
  <view>
    <uni-notice-bar show-icon scrollable text="uni-app 版正式发布，开发一次，同时发布iOS、Android、H5、微信小程序、支付宝小程序、百度小程序、头条小程序等7大平台。" />
    <view class="hot-service">
      <ServiceSelect title="上门喂猫" bgColor="#2979FF" type="zhongyiguan" icColor="#fff"></ServiceSelect>
      <ServiceSelect title="上门喂狗" bgColor="#2979FF"  type="liugou"  icColor="#fff"></ServiceSelect>
      <ServiceSelect title="预约服务" bgColor="#2979FF" type="yuyuedingdan" icColor="#fff"></ServiceSelect>
      <ServiceSelect title="领养宠物" bgColor="#2979FF" type="aixinlingyanghover"  icColor="#fff"></ServiceSelect>
    </view>

    <!-- 服务对象 -->
    <uni-section title="请选择服务宠物类型">
      <view class="type-service">
          <SelectItem title="猫咪"></SelectItem>
          <SelectItem title="小狗"></SelectItem>
          <SelectItem title="仓鼠"></SelectItem>
          <SelectItem title="仓鼠"></SelectItem>
          <SelectItem title="仓鼠"></SelectItem>
      </view>
  
    </uni-section>
    <!-- 服务类型 -->
    <uni-section title="请选择服务宠物类型">
      <view class="type-service">
          <SelectType @click="gotoDetailService"></SelectType>
          <SelectType></SelectType>
      </view>
    </uni-section>
  </view>
</template>

<script setup>
  import {
    ref
  } from 'vue'
  import ServiceSelect from './components/ServiceSelect.vue'
  import SelectItem from './components/SelectItem.vue'
  import SelectType from './components/SelectType.vue'
  const gotoDetailService=()=>{
    uni.navigateTo({
      url:'/pages/home/DetailService'
    })
  }
</script>

<style lang="scss" scoped>
  ::v-deep .uni-card__header {
    border-bottom: 0 !important;
  }

  .hot-service {
    display: flex;
    justify-content: space-between;
    align-items: center;
    
  }
  .type-service{
    padding: 12rpx;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }
</style>