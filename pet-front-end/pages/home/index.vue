<template>
  <view>
    <uni-notice-bar show-icon scrollable text="uni-app 版正式发布，开发一次，同时发布iOS、Android、H5、微信小程序、支付宝小程序、百度小程序、头条小程序等7大平台。" />
    <view class="hot-service">
      <ServiceSelect title="上门喂猫" bgColor="#2979FF"></ServiceSelect>
      <ServiceSelect title="上门喂狗" bgColor="#2979FF"></ServiceSelect>
      <ServiceSelect title="预约服务" bgColor="#2979FF"></ServiceSelect>
      <ServiceSelect title="我要接单" bgColor="#2979FF"></ServiceSelect>
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
          <SelectType></SelectType>
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