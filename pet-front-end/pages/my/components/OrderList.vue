<template>
  <uni-section title="我的订单" type="line" padding titleFontSize="18px">
    <!-- <text class="uni-body">这是一个基础卡片示例，此示例展示了一个标题加标题额外信息的标准卡片。</text> -->
    <uni-grid :column="4" :highlight="true" @change="change"  :showBorder="false" :square="false">
      <uni-grid-item>
        <view class="grid-item-box" style="background-color: #fff;" @tap="gotoOrderDetail">
          <icon-base type="huodaofukuan"    size="50"></icon-base>
          <text class="text">我的订单</text>
        </view>
      </uni-grid-item>
      <uni-grid-item>
        <view class="grid-item-box" style="background-color: #fff;">
             <icon-base type="wuliyoutuihuo"  size="50"></icon-base>
          <text class="text">待付款</text>
        </view>
      </uni-grid-item>
      <uni-grid-item>
        <view class="grid-item-box" style="background-color: #fff;">
           <icon-base type="quanchangbaoyou"  size="50"></icon-base>
          <text class="text">待收货</text>
        </view>
      </uni-grid-item>
      <uni-grid-item>
        <view class="grid-item-box" style="background-color: #fff;">
           <icon-base type="zhengguifapiao"  size="50"></icon-base>
          <text class="text">已完成</text>
        </view>
      </uni-grid-item>
    </uni-grid>

  </uni-section>
</template>

<script setup>
  const gotoOrderDetail=()=>{
    uni.navigateTo({
      url:'/pages/my/OrderDetail'
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