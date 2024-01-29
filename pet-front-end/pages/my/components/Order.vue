<template>
  <uni-section title="我的订单" type="line" padding titleFontSize="18px">
    <!-- <text class="uni-body">这是一个基础卡片示例，此示例展示了一个标题加标题额外信息的标准卡片。</text> -->
    <uni-grid :column="4" :highlight="true" @change="change">
      <uni-grid-item>
        <view class="grid-item-box" style="background-color: #fff;">
          <uni-icons type="image" :size="30" color="#777" />
          <text class="text">订单记录</text>
        </view>
      </uni-grid-item>
      <uni-grid-item>
        <view class="grid-item-box" style="background-color: #fff;">
          <uni-icons type="image" :size="30" color="#777" />
          <text class="text">订单详情</text>
        </view>
      </uni-grid-item>
      <uni-grid-item>
        <view class="grid-item-box" style="background-color: #fff;">
          <uni-icons type="image" :size="30" color="#777" />
          <text class="text">物流信息</text>
        </view>
      </uni-grid-item>
      <uni-grid-item>
        <view class="grid-item-box" style="background-color: #fff;">
          <uni-icons type="image" :size="30" color="#777" />
          <text class="text">申请退款</text>
        </view>
      </uni-grid-item>
    </uni-grid>

  </uni-section>
</template>

<script setup>
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