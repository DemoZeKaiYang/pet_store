<template>
  <view class="main">
    <!-- 上传图片 -->
    <view class="picture">
      <uni-file-picker limit="1" class="select-picture"></uni-file-picker>
    </view>

    <!-- 标题 -->
    <view class="section">
      <uni-easyinput type="text" placeholder="填写标题吸引大家的注意" :inputBorder="false" />
    </view>
    <!-- 内容 -->
    <view class="content">
      <uni-easyinput type="textarea" autoHeight placeholder="填写下您的想法"   ></uni-easyinput>
    </view>


    <!-- 发布类型 -->
    <view class="publish-type">
      <uni-data-select v-model="value" :localdata="range" @change="change"></uni-data-select>
    </view>
    <view class="publish">
      <button class="publish-btn" type="primary">发布</button>
    </view>

  </view>

</template>

<script setup>
  import {
    ref
  } from 'vue'
  const formData = ref({
    section: '123'
  })
</script>

<style lang="scss" scoped>
  .main {
    padding: 25rpx;
  }

  .picture {
    margin-top: 25rpx;
  }

  .section,
  .content {
    border-bottom: 1px solid #E5E5E5;
  }
  .publish-type{
      margin-top: 20rpx;
  }
  .publish {
  margin-top: 20rpx;
    .publish-btn {
      border-radius: 20px;
    }
  }
</style>