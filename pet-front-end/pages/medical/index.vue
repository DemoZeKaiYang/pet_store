<template>
  <!-- 定位 -->
  <!--搜索框-->
  <view class="top">
    <view class="location">
      <!-- 图标 -->
      <uni-icons type="location-filled" size="22" color="#2979FF"></uni-icons>
      <view class=""> {{ address }} </view>
    </view>
    <view class="search"> </view>
  </view>
  <view class="set-search">
    <!-- :class="{ active: parame.sortrule === 'weight'?true:false }" -->
    <view class="commend" @tap="handlerChange(1)">
      综合推荐 <uni-icons type="arrow-down" size="16" color="#919191"></uni-icons>
    </view>
    <!--  :class="{ active: parame.sortrule === 'distance' }" -->
    <view class="distance" @tap="handlerChange(2)">
      距离优先 <uni-icons type="arrow-down" size="16" color="#919191"></uni-icons>
    </view>
  </view>

  <view class="info">
    <view class="hospital" v-for="(item, index) in hospitals">
      <view class="left">
        <!-- 医院图片 -->
        <img :src="item.photos[0].url" alt="" class="hospital-image" />
      </view>
      <!-- 医院信息 -->
      <view class="right">
        <view class="">
          <!-- 医院名字 -->
          <view class="name">{{ item.name }}</view>
          <!-- 公里距离 -->
          <view class="type">{{ item.type }}</view>
          <!-- detail_address -->
          <view class="address">{{ item.address }}</view>
          <!-- 在那一块商圈 -->
          <view class="km-distance"
            >{{ item.distance / 1000 }}公里 评分:{{ item.business.rating }}</view
          >
          <view class="time" v-if="item.business.opentime_week">
            营业时间:{{ item.business.opentime_week }}
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const address = ref()
const hospitals = ref([])
const test = ref('')
const gaodeParamePOI2 = ref({
  sortrule: 'weight',
  show_fields: `photos,business`,
  location: '',
  keywords: '宠物医院',
  radius: 5000,
  output: 'json',
  key: 'f0a1569e5f07b655319d5429462b03a2',
})

const getAddress = async () => {
  try {
    //获取经纬度
    const location = await uni.getLocation({
      type: 'gcj02',
      geocode: true,
    })

    if (!location) return
    const { latitude, longitude } = location
    test.value = `${latitude},${longitude}`
    address.value =
      location.address.province +
      location.address.city +
      location.address.district +
      location.address.street
    gaodeParamePOI2.value.location = `${latitude},${longitude}`
    console.log(gaodeParamePOI2.value.location)
    const url = `https://restapi.amap.com/v5/place/around`
    const response = await uni.request({
      url,
      method: 'GET',
      data: gaodeParamePOI2.value,
    })
    if (response.data && response.data.status === '1' && response.data.count > 0) {
      hospitals.value = response.data.pois // 假设返回的数据结构中有 pois 字段包含医院信息
    } else {
      uni.showToast({ title: '未找到附近宠物医院', icon: 'none' })
    }
  } catch (e) {
    console.error('查询宠物医院出错', error)
    uni.showToast({ title: '查询出错', icon: 'none' })
  }
}

//综合推荐or距离优先
const handlerChange = (id) => {
  if (id === 1) {
    parame.value.sortrule = 'weight'
  } else {
    parame.value.sortrule = 'distance'
  }
  getAddress()
}

onMounted(() => {
  getAddress()
})
</script>

<style scoped lang="scss">
.top {
  display: flex;
  height: 112rpx;
  .location {
    width: 750rpx;
    font-size: 34rpx;
    display: flex;
    // justify-content: ;
    align-items: center;
  }
  
}

.set-search {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-size: 28rpx;
  color: #919191;
  .active {
    color: #2979ff;
  }
}

.info {
  .hospital {
    display: flex;
    width: 750rpx;
    height: 300rpx;
    padding: 20rpx;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    .left {
      width: 200rpx;
      display: flex;
      border-radius: 20rpx;
      .hospital-image {
        width: 200rpx;
        height: 200rpx;
        border-radius: 20rpx;
      }
    }
    .right {
      display: flex;
      align-items: center;
      padding: 0 20rpx;
      width: 510rpx;
      box-sizing: border-box;
      .name {
        font-size: 34rpx;
        font-weight: 700;
        overflow: hidden;
      }
      .address,
      .type,
      .name {
        width: 500rpx;
        overflow: hidden; /* 隐藏超出容器的部分 */
        text-overflow: ellipsis; /* 超出部分显示省略号 */
        white-space: nowrap; /* 防止文本换行 */
      }
      .km-distance {
        color: #2979ff;
      }
    }
  }
}
</style>
