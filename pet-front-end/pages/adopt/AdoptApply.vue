<template>
  <view class="content">
    <view class="info"  v-for="item in applyData">
      <view class="timer-state">
        <view class="state"> 申请状态：{{item.status}} </view>
      </view>
      <view class="image-text" >
        <view class="main">
          <!-- 文字 -->
          <img :src="imagePrefix+ item.adopt.adopt_image" alt="" />
          <view >
            <text>名字:{{ item.adopt.adopt_name }}</text>
            <text>出生日期：{{ item.adopt.adopt_birthday }}</text>
            <text>性别：{{ item.adopt.adopt_sex?'男':"女" }}</text>
          </view>
        </view>
      </view>
      <!-- 商品数量,价钱 -->
      <view class="number-price">
        <view class="num"> 申请地址{{item.adopt.adopt_address}} </view>
        <view class="price"> 品种 {{ item.adopt.adopt_var}} </view>
      </view>
    </view>
     
    </view>
  
</template>

<script setup>
import { ref } from 'vue'
import { useUserStore } from '@/stores/user'
import { onLoad } from '@dcloudio/uni-app'
import { getAdoptApplyAPI } from '@/apis/adopt.js'
import { devUrl } from '@/config';
const imagePrefix=ref(devUrl+'/pet_uploads/')
const userStore = useUserStore()
const applyData = ref([])
const getData = async () => {
  const result = await getAdoptApplyAPI(userStore.user.user_id)
  if (result.code === 2000) {
    applyData.value = result.data
    console.log(applyData.value);
  }
}

onLoad(() => {
  getData()
})
</script>

<style scoped lang="scss">
  
  .content {
    background-color: #ffffff;
      

    //时间和状态
    .timer-state {
      display: flex;
      height: 80rpx;
      padding: 0 25rpx;
      .timer {
        width: 500rpx;
        line-height: 80rpx;
        height: 80rpx;
      }
      .state {
        width: 200rpx;
        text-align: left;
        
        color: black;
        font-size: 25rpx;
        line-height: 80rpx;
        height: 80rpx;
      }
    }
    // 中间的文本+图片
    .image-text {
      background-color: #f7f7f7;
      padding: 25rpx;
      .main {
        display: flex;
        img {
          border-radius: 10px;
          width: 150rpx;
          height: 150rpx;
        }
        text {
          box-sizing: border-box;
          display: flex;
          align-items: center;
          width: 500rpx;
          height: 50rpx;
          margin-left: 50rpx;
          color: #4a4447;
          font-size: 30rpx;
          overflow: hidden;
        }
      }
    }
  
    // 数量和价格
    .number-price {
      display: flex;
      height: 80rpx;
      box-sizing: border-box;
      border-bottom: 1px solid #f4f4f4;
      font-size: 25rpx;
      justify-content: space-evenly;
      .num {
        width: 400rpx;
        text-align: left;
        line-height: 80rpx;
        padding-left: 30rpx;
      }
      .price {
        width: 350rpx;
        text-align: center;
        line-height: 80rpx;
      }
    }
  
    .operation {
      width: 750rpx;
      height: 100rpx;
      padding: 20rpx 0;
      box-sizing: border-box;
      text-align: right;
  
      .btn {
        display: inline-block;
        width: 200rpx;
        height: 60rpx;
        text-align: center;
        line-height: 60rpx;
        border-radius: 40rpx;
        font-size: 28rpx;
        margin-right: 20rpx;
      }
    }
  }

</style>
