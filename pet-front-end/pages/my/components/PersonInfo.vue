<template>
  <view class="my-infomation" @click="editPerson">
    <!-- 头像 -->
    <view class="my-avatar">
      <img :src="store.avatar" alt="" />
    </view>
    <!-- 个人信息 -->
    <view class="person">
      <h3>{{ store.user.user_name }}</h3>
      <p class="signature">{{ store.user.user_signature }}</p>
    </view>
    <!-- 图标 -->
    <view class="show-icon">
      <uni-icons type="right" size="24" color="white"></uni-icons>
    </view>
  </view>
</template>

<script setup>
import { useUserStore } from '@/stores/user.js'
const store = useUserStore()
const editPerson = () => {
  uni.navigateTo({
    url: '/pages/my/EditPerson',
  })
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
      overflow: hidden; /* 隐藏超出容器的部分 */
      text-overflow: ellipsis; /* 超出部分显示省略号 */
      white-space: nowrap; /* 防止文本换行 */
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
