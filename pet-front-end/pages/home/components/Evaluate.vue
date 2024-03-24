<template>
  <view class="commentcomponent">
    <view v-for="(item, index) in service_comments" :key="item.service_comment_id" class="commentitem">

      <view class="comment_top">
        <image
          class="headpic"
          :src="item.service_comment_avatar ? `${devUrl}/uploads/${item.service_comment_avatar}` : defaultAvatar"
        >
        </image>
        <view class="content">
          <view class="content_top">
            <view class="">
              <text class="cm_name">{{
                item.service_comment_name ? item.service_comment_name : '匿名用户'
              }}</text>
            </view>
          </view>
          <view style="display: flex; align-items: center; justify-content: space-between">
            <view class="cm_rate">
              <uni-rate :value="item.service_comment_star" readonly />
            </view>
            <text class="cm_time">{{ item.service_comment_date }}</text>
          </view>
        </view>
      </view>
      <view class="contents">
        <view class="cm_info_comment">
          {{ item.service_comment_content }}
        </view>
      </view>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue'
import { devUrl } from '@/config.js'
const defaultAvatar = ref(`${devUrl}/uploads/default.png`)
const props = defineProps({
  service_comments: {
    type: Array,
    value: [],
  },
})
</script>

<style lang="scss" scoped>
.commentitem {
  margin-top: 24rpx;
  border-bottom: 1rpx solid #f6f6f6;
  padding: 0 30rpx 24rpx;
}

.comment_top {
  display: flex;
  align-items: center;
}

.content {
  width: 100%;
}

.content_top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.content_top .time {
  font-size: 24rpx;
  color: #ccc;
}

.headpic {
  width: 87rpx;
  height: 87rpx;
  flex-shrink: 0;
  border-radius: 87rpx;
  margin-right: 10rpx;
}

.cm_name {
  font-size: 32rpx;
  font-family: PingFang SC;
  line-height: 32rpx;
  font-weight: 700;
  color: #4d4d4d;
}

.cm_time {
  font-size: 24rpx;
  line-height: 24rpx;
  font-family: PingFang SC;
  font-weight: 400;
  color: #999;
}

.cm_rate {
  display: flex;
  align-items: center;
  font-size: 24rpx;
  font-family: PingFang SC;
  font-weight: 400;
  color: #4d4d4d;
}

.cm_info {
  margin-top: 20rpx;
  font-size: 30rpx;
  line-height: 30rpx;
  flex-wrap: wrap;
  display: flex;
}

.cm_info text {
  background: #2979ff;
  color: #fff;
  font-size: 24rpx;
  border-radius: 25rpx;
  padding: 10rpx 26rpx;
  margin: 0 36rpx 20rpx 0;
}

.cm_info_comment {
  margin-top: 30rpx;
  color: #4d4d4d;
  font-size: 30rpx;
  line-height: 46rpx;
}

.cm_info_text {
  color: #03dd98;
  padding: 0 15rpx;
  background: rgba(92, 201, 155, 0.1);
  margin: 9rpx;
  border-radius: 8rpx;
}
</style>
