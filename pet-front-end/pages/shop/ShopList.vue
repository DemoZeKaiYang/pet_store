<template>
  <view class="content">
    <view class="t-goods-list" v-if="goodList && goodList.length > 0">
      <view
        class="t-goods-item"
        v-for="(item, index) in goodList"
        :key="index"
        @click="clickItem(item.good_id)"
      >
        <!-- 图片 -->
        <image
          class="t-goods-img"
          :src="`${devUrl}/good_uploads/${item.good_image}`"
        ></image>
        <!-- 商品名称 -->
        <view class="t-goods-name"
          ><text>{{ item.good_name }}</text></view
        >

        <!-- 商品价格 -->
        <view class="t-goods-price">
          <text class="t-rmb">¥</text>
          <text class="t-p1">{{ item.good_price }}</text>
          <text class="t-p2">¥{{ item.good_origin_price }}</text>
        </view>
        <view class="t-rate">
          <view
            ><text>{{ item.good_comment_num }}人评价</text></view
          >
          <view class="t-rate-percent"
            ><text>{{ item.good_comment_num }}好评</text></view
          >
        </view>
      </view>
    </view>
    <view class="t-loading-more" v-if="isLoading || (isNoMore && goodList && goodList.length > 0)">
      <image src="../../static/loading.png" v-if="isLoading"></image>
      <view class="t-loading-desc" v-if="isLoading || isNoMore"
        >{{ isLoading ? '加载中...' : isNoMore ? '没有更多数据了' : '' }}
      </view>
    </view>
    <view class="t-empty" v-else-if="isInit">
      <image src="/static/goods.png"></image>
      <view class="t-empty-desc">没有商品哦~</view>
    </view>
  </view>
</template>

<script setup>
import { onMounted, onUpdated, ref } from 'vue'
import { onLoad, onReachBottom } from '@dcloudio/uni-app'
import { reqParams } from '@/utils/reqParams'
import { devUrl } from '@/config';
const props = defineProps({
  goodList: Array,
})
const pageNo = ref(1)
const pageSize = ref(10)
const isNoMore = ref(false)
const isLoading = ref(false)
const isInit = ref(false)

onMounted(() => {
  isLoading.value = true
  if (props.goodList) {
    //初始化完成
    isInit.value = true
    //关闭加载动画
    isLoading.value = false
    //如果第一次请求数据量少于pageSize说明只有一页，直接显示没有更多数据
    if (!props.goodList || props.goodList.length < pageSize.value) {
      isNoMore.value = true
    }
  }
})

const clickItem = (index) => {
  uni.navigateTo({
    url: reqParams('/pages/category/productdetail', { good_id: index }),
  })
}
</script>

<style lang="scss" scoped>
.content {
  box-sizing: border-box;
  min-width: 100vw;
  min-height: 100vh;
  background-color: #f2f3f5;
  padding-bottom: 80rpx;

  .t-goods-list {
    padding-top: 18rpx;
    box-sizing: border-box;
    width: 690rpx;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    .t-goods-item {
      box-sizing: border-box;
      width: 336rpx;
      height: 530rpx;
      background-color: #ffffff;
      border-radius: 20rpx;
      overflow: hidden;
      margin-bottom: 18rpx;
      position: relative;

      .t-goods-img {
        width: 100%;
        height: 300rpx;
      }

      .t-goods-name {
        font-size: 28rpx;
        color: #000000;
        line-height: 30rpx;
        -webkit-line-clamp: 3;
        display: -webkit-box;
        text-overflow: ellipsis;
        overflow: hidden;
        -webkit-box-orient: vertical;
        padding: 0rpx 18rpx;
        box-sizing: border-box;
        word-break: break-all;
      }

      .t-goods-tags {
        padding: 0rpx 18rpx;
        box-sizing: border-box;
        margin-top: 16rpx;

        .t-tag {
          font-size: 20rpx;
          border-radius: 4rpx;
          border: 1rpx solid;
          box-sizing: border-box;
          padding: 3rpx 5rpx;
          -webkit-line-clamp: 1;
          display: -webkit-box;
          text-overflow: ellipsis;
          overflow: hidden;
          -webkit-box-orient: vertical;
          float: left;
          word-break: break-all;

          &:not(:last-child) {
            margin-right: 8rpx;
          }
        }
      }

      .t-goods-price {
        padding: 0rpx 18rpx;
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        position: absolute;
        width: 100%;
        bottom: 70rpx;
        left: 0rpx;
        width: 100%;

        .t-rmb {
          font-size: 26rpx;
          color: #000000;
        }

        .t-p1 {
          font-size: 32rpx;
          color: #000000;
          margin-left: 4rpx;
          font-weight: bold;
        }

        .t-p2 {
          font-size: 20rpx;
          color: #999999;
          margin-left: 10rpx;
          text-decoration: line-through;
        }
      }

      .t-rate {
        padding: 0rpx 18rpx;
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        position: absolute;
        width: 100%;
        bottom: 30rpx;
        left: 0rpx;
        width: 100%;
        font-size: 20rpx;
        color: #999999;

        .t-rate-percent {
          margin-left: 8rpx;
        }
      }
    }
  }
}

.t-empty {
  width: 100%;
  height: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  image {
    width: 320rpx;
    height: 320rpx;
  }

  .t-empty-desc {
    padding-bottom: 30rpx;
    padding-top: 20rpx;
    font-size: 28rpx;
    color: #999999;
  }
}

.t-loading-more {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60rpx;

  image {
    width: 36rpx;
    height: 36rpx;
    -webkit-animation: spin 1s 0s step-end infinite;
    animation: spin 1s 0s step-end infinite;
    margin-right: 12rpx;
  }

  .t-loading-desc {
    font-size: 28rpx;
    color: #999999;
  }

  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }

    8% {
      -webkit-transform: rotate(30deg);
      transform: rotate(30deg);
    }

    16% {
      -webkit-transform: rotate(60deg);
      transform: rotate(60deg);
    }

    24% {
      -webkit-transform: rotate(90deg);
      transform: rotate(90deg);
    }

    32% {
      -webkit-transform: rotate(120deg);
      transform: rotate(120deg);
    }

    40% {
      -webkit-transform: rotate(150deg);
      transform: rotate(150deg);
    }

    48% {
      -webkit-transform: rotate(180deg);
      transform: rotate(180deg);
    }

    56% {
      -webkit-transform: rotate(210deg);
      transform: rotate(210deg);
    }

    64% {
      -webkit-transform: rotate(240deg);
      transform: rotate(240deg);
    }

    73% {
      -webkit-transform: rotate(270deg);
      transform: rotate(270deg);
    }

    82% {
      -webkit-transform: rotate(300deg);
      transform: rotate(300deg);
    }

    91% {
      -webkit-transform: rotate(330deg);
      transform: rotate(330deg);
    }

    100% {
      -webkit-transform: rotate(1turn);
      transform: rotate(1turn);
    }
  }

  @keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }

    8% {
      -webkit-transform: rotate(30deg);
      transform: rotate(30deg);
    }

    16% {
      -webkit-transform: rotate(60deg);
      transform: rotate(60deg);
    }

    24% {
      -webkit-transform: rotate(90deg);
      transform: rotate(90deg);
    }

    32% {
      -webkit-transform: rotate(120deg);
      transform: rotate(120deg);
    }

    40% {
      -webkit-transform: rotate(150deg);
      transform: rotate(150deg);
    }

    48% {
      -webkit-transform: rotate(180deg);
      transform: rotate(180deg);
    }

    56% {
      -webkit-transform: rotate(210deg);
      transform: rotate(210deg);
    }

    64% {
      -webkit-transform: rotate(240deg);
      transform: rotate(240deg);
    }

    73% {
      -webkit-transform: rotate(270deg);
      transform: rotate(270deg);
    }

    82% {
      -webkit-transform: rotate(300deg);
      transform: rotate(300deg);
    }

    91% {
      -webkit-transform: rotate(330deg);
      transform: rotate(330deg);
    }

    100% {
      -webkit-transform: rotate(1turn);
      transform: rotate(1turn);
    }
  }
}
</style>
