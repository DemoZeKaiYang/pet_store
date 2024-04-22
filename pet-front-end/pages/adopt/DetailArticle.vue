<template>
  <view class="content">
    <rich-text :nodes="strings"></rich-text>
  </view>
</template>

<script setup>
import { ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import { getArticleContentAPI } from '@/apis/article';


const article_id = ref('')
const strings = ref('')
const getData = async () => {
  const result = await getArticleContentAPI(article_id.value)
  if (result.code === 2000) {
    
    strings.value = result.data[0].article_content
    console.log(strings.value);
  }
}
onLoad((query) => {
  if (Object.keys(query).length !== 0) {
    let obj = {}
    for (let i in query) {
      obj[decodeURIComponent(i)] = decodeURIComponent(query[i])
    }
    article_id.value = obj.article_id
    getData()
  }
})
</script>

<style lang="scss" scoped>
// 先占位
.show-image {
  height: 500rpx;

  .swiper {
    height: 500rpx;
  }

  img {
    width: 750rpx;
    height: 500rpx;
  }
}

.article-section {
  padding: 25rpx;
  h4 {
    coloir: #333333;
  }
  text {
    display: inline-block;
    margin-top: 10px;
  }
}
</style>
