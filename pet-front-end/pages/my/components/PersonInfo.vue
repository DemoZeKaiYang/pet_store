<template>
  <view class="my-infomation" @click="editPerson">
    <!-- 头像 -->
    <view class="my-avatar">
      <img :src="`./static/touxiang.png`" alt="" />
    </view>
    <!-- 个人信息 -->
    <view class="person">
      <h3>张学友和刘德华最爱的人</h3>
      <p>喜欢自己的猫狗</p>
    </view>
    <!-- 图标 -->
    <view class="show-icon">
      <uni-icons type="right" size="24" color="white"></uni-icons>
    </view>
  </view>
</template>

<script setup>
  const editPerson = () => {
    uni.navigateTo({
      url: '/pages/my/EditPerson',

    });
  }
</script>
<style lang="scss" scoped>
  .my-infomation {
    width: 100%;
    height: 150rpx;
    background-color: $uni-primary;
    color: white;
    display: flex;

    .my-avatar {
      width: 15%;
      height: 150rpx;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 100rpx;
        height: 100rpx;
        border-radius: 50%;
      }
    }

    .person {
      width: 80%;
      height: 150rpx;

      h3:nth-child(1) {
        margin-top: 20rpx;
      }

      p:nth-child(2) {
        margin-top: 10rpx;
      }
    }

    .show-icon {
      width: 5%;
      height: 150rpx;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
</style>