<template>
  <view class="top">
    <tab-nav :tabnav="tabnav" default-key="1" @ontype_="ontype"> </tab-nav>
  </view>
  <view class="main" v-show="selectKey === 1">
    <view
      class="pet-adopt"
      v-for="(adopt, index) in adoptInfo"
      @tap="gotoDetailAdopt(adopt.adopt_id)"
    >
      <!-- 图片 -->
      <img :src="imagePrefix + adopt.adopt_image" alt="" class="pet-img" />
      <!-- 标题 -->
      <view class="title"> {{ adopt.adopt_name }}，求领养~</view>
      <!-- 品种，年龄，发布时间 -->
      <view class="describe">
        <!-- 宠物信息 -->
        <view class=""
          >{{ adopt.adopt_sex === 1 ? '男' : '女' }}|出生:{{ adopt.adopt_birthday }}</view
        >
        <view class="" style="overflow: hidden"> {{ adopt.adopt_description }} </view>
      </view>
    </view>
  </view>
  <view class="" v-show="selectKey === 2">
    <!--  proList: 条目数组数据  goProDetail:条目点击事件跳转（实现了点击条目数据传值）-->
    <!-- <WaterListView :proList="projectList" @click="goProDetail(1)" v-if="false"></WaterListView> -->
    <!--图文信息 -->
    <ImageText ></ImageText>
  </view>
  <uni-fab ref="fab" horizontal="right" vertical="bottom" :popMenu="false" @trigger="trigger" />
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { devUrl } from '@/config.js'
import WaterListView from './components/WaterListView.vue'
import ImageText from './components/ImageText.vue'
import { getAdoptAPI } from '@/apis/adopt.js'
import { reqParams } from '../../utils/reqParams'

const articleData=ref([])
const imagePrefix = ref(devUrl + '/pet_uploads/')
const tabnav = ref([
  {
    type: 1,
    name: '领养',
    list: [],
  },
  {
    type: 2,
    name: '文章',
    list: [],
  },
])
const adoptInfo = ref([])
const selectKey = ref(1)
//tab栏点击切换后事件
const ontype = (e) => {
  selectKey.value = e.type
}
const handlerClick = () => {}
const trigger = () => {
  console.log(1)
}

const getData = async () => {
  const result = await getAdoptAPI()
  if (result.code === 2000) {
    adoptInfo.value = result.data
  }
}

const gotoDetailAdopt = (adopt_id) => {
  const url = reqParams('/pages/adopt/DetailAdopt', { adopt_id })
  uni.navigateTo({ url })
}

onMounted(() => {
  getData()

})
</script>

<style lang="scss" scoped>
page {
  background-color: #ffffff;
}
.top {
  width: 750rpx;
  height: 100rpx;
  display: flex;
  align-items: center;
  .active {
    color: #ffb600;
    border-bottom: 3px solid #ffb600;
  }
  .option {
    box-sizing: border-box;
    height: 100rpx;
    line-height: 100rpx;
    width: 250rpx;
    display: flex;
    justify-content: center;
    text {
      width: 100rpx;
      text-align: center;
    }
  }
}

.main {
  padding: 0 15rpx;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

  .pet-adopt {
    height: 500rpx;
    width: 320rpx;
    .pet-img {
      border-radius: 10px;
      width: 320rpx;
      height: 320rpx;
    }

    .title {
      margin: 10rpx 0;
      font-size: 32rpx;
    }

    .describe {
      display: flex;
      justify-content: space-between;
      font-size: 24rpx;
      color: #8b8ba9;
    }
  }
}
</style>
