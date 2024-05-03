<template>
  <view  >
    <view class="top">
      <image :src="imagePrefix+info.adopt_image" mode="scaleToFill" ></image>
    </view>
    <view class="main">
      <h2 class="header-adopt">{{ info.adopt_name }}</h2>
      <view class="one">
        <view class="name"
          >姓名：<text style="color: black">{{ info.adopt_name }}</text>
        </view>
        <view class="sex"
          >出生：<text style="color: black">{{ info.adopt_birthday }}</text>
        </view>
      </view>
      <view class="one">
        <view class="name"
          >品种：<text style="color: black">{{ info.adopt_var }}</text>
        </view>
        <view class="sex"
          >性别：<text style="color: black">{{ info.adopt_sex ? '男' : '女' }}</text>
        </view>
      </view>
      <view class="one">
        <view class="address"
          >地区： <text style="color: black">{{ info.adopt_address }}</text>
        </view>
      </view>
    </view>
    <view class="describe">
      <h3 class="">宠物描述</h3>
      <view class="detail">{{ info.adopt_description }}</view>
    </view>
    
    <view class="operation">
      <uni-goods-nav
        :fill="true"
        :button-group="buttonGroup"
        @click="onClick"
        @buttonClick="buttonClick"
        :options="options"
      />
    </view>
  </view>
 
</template>

<script setup>
import { ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import { getAdoptOneAPI } from '@/apis/adopt.js'
import { reqParams } from '../../utils/reqParams'
import { devUrl } from '@/config';
const adoptId = ref('')
const imagePrefix=ref(devUrl+'/pet_uploads/')
const buttonGroup = ref([
  {
    text: '在线咨询',
    backgroundColor: 'linear-gradient(90deg, #FC778A, #FC778A)',
    color: '#fff',
  },
  {
    text: '申请领养',
    backgroundColor: 'linear-gradient(90deg, #FFA919, #FFA919)',
    color: '#fff',
  },
])
const options = ref([])
const info = ref({})
//右侧按钮
const buttonClick = (e) => {
  //跳转到咨询
  if (e.index === 0) {
    uni.navigateTo({
      url: '/pages/messages/Chat',
    })
  }
  //调整到信息填写
  if (e.index === 1) {
    const url = reqParams('/pages/adopt/Questionnaire', { adoptId: adoptId.value })
    uni.navigateTo({
      url,
    })
  }
}
const getData = async (adopt_id) => {
  const result = await getAdoptOneAPI(adopt_id)
  console.log(result)
  if (result.code === 2000) {
    info.value = result.data
  }
}

onLoad((query) => {
  if (Object.keys(query).length !== 0) {
    let obj = {}
    for (let i in query) {
      obj[decodeURIComponent(i)] = decodeURIComponent(query[i])
    }
    adoptId.value = obj.adopt_id
    getData(obj.adopt_id)
  }
})
</script>

<style scoped lang="scss">
page {
  background-color: #f3f5f9;
}

.top{
  display: flex;
  align-items: center;
  justify-content: center;
}
.main {
  margin: 0 25rpx;
  border-radius: 20px;
  background-color: #ffffff;
  padding: 20rpx;
  .header-adopt {
    display: flex;
    box-sizing: border-box;
  }
  .one {
    margin-top: 30rpx;
    display: flex;
    color: #bbbbbb;
    view {
      width: 330rpx;
    }
    .address {
      width: 100%;
      overflow: hidden;
    }
  }
}
.operation {
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */
  flex-direction: column;
  position: fixed;
  left: 0;
  right: 0;
  /* #ifdef H5 */
  left: var(--window-left);
  right: var(--window-right);
  /* #endif */
  bottom: 0;
}

.describe {
  margin: 50rpx 25rpx;
  border-radius: 20px;
  background-color: #ffffff;
  padding: 20rpx;
  .detail {
    margin-top: 20rpx;
  }
}
</style>