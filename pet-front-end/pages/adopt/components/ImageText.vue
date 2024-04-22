<template>
  <view class="">
    <view class="total" v-for="item in articleData" @click="gotoDetailArticle(item.article_id)">
      <view class="left">
        <rich-text :nodes="item.article_content" class="top"></rich-text>
        <view class="bto">
          <view class="timer"> {{ item.article_date }} </view>
        </view>
      </view>
      <view class="right">
        <img :src="item.article_image" alt="" />
      </view>
    </view>
  </view>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { getArticleAPI } from '@/apis/article'
import { reqParams } from '../../../utils/reqParams'
const articleData = ref([])
const getArticleData = async () => {
  const result = await getArticleAPI()

  if (result.code === 2000) {
    articleData.value = result.data
  }
}
const gotoDetailArticle = async (article_id) => {
  const url = reqParams('/pages/adopt/DetailArticle', { article_id })
  uni.navigateTo({url})
}
onMounted(() => {
  getArticleData()
})
</script>

<style lang="scss" scoped>
// 740
// 440
.total {
  background-color: #ffffff;
  padding: 20rpx;
  width: 750rpx;
  display: flex;
  height: 210rpx;

  .left {
    width: 410rpx;
    .top {
      height: 160rpx;
      width: 500rpx;
      height: 500rpx;
      overflow: hidden;
    }
    .bto {
      display: flex;
      font-size: 24rpx;
      color: #acacac;
      height: 50rpx;
    }
  }
  .right {
    img {
      width: 300rpx;
      height: 200rpx;
      border-radius: 10rpx;
    }
  }
}
</style>
