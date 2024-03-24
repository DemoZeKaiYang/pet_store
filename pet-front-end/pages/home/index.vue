<template>
  <view>
    <uni-notice-bar
      show-icon
      scrollable
      text="uni-app 版正式发布，开发一次，同时发布iOS、Android、H5、微信小程序、支付宝小程序、百度小程序、头条小程序等7大平台。"
    />
    <view class="hot-service">
      <ServiceSelect
        title="上门喂猫"
        bgColor="#2979FF"
        type="zhongyiguan"
        icColor="#fff"
        @tap="gotoDetailService('62f84788-252f-4908-ba43-a19001052418')"
      ></ServiceSelect>
      <ServiceSelect
        title="上门喂狗"
        bgColor="#2979FF"
        type="liugou"
        icColor="#fff"
           @tap="gotoDetailService('65d55764-1230-423d-8424-a5f1c9b75425')"
      ></ServiceSelect>
      <ServiceSelect
        title="上门喂食"
        bgColor="#2979FF"
        type="yuyuedingdan"
        icColor="#fff"
           @tap="gotoDetailService('156b135f-338c-462c-a199-03f138166828')"
      ></ServiceSelect>
      <ServiceSelect
        title="领养宠物"
        bgColor="#2979FF"
        type="aixinlingyanghover"
        icColor="#fff"
        @tap="jumpAdopt"
      ></ServiceSelect>
    </view>

    <!-- 服务对象 -->
    <uni-section title="请选择服务宠物类型">
      <view class="type-service">
        <SelectItem
          v-for="st in serviceTypeList"
          :title="st.service_type_name"
          :key="st.service_type_id"
          @tap="getServiceData(st.service_type_id)"
        >
          {{ st.service_type_name }}
        </SelectItem>
      </view>
    </uni-section>
    <!-- 服务类型 -->
    <uni-section title="请选择服务宠物类型">
      <view class="type-service">
        <SelectType
          class="service-type"
          @click="gotoDetailService(service.service_id)"
          v-for="service in serviceList"
          :title="service.service_name"
          :imgurl="service.service_image"
        ></SelectType>
      </view>
    </uni-section>
  </view>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import ServiceSelect from './components/ServiceSelect.vue'
import SelectItem from './components/SelectItem.vue'
import SelectType from './components/SelectType.vue'
import { getServiceTypeApi, getServiceAPI } from '@/apis/service.js'
import { reqParams } from '../../utils/reqParams'

const serviceTypeList = ref([])
const serviceList = ref([])
const gotoDetailService = (service_id) => {
  const url = reqParams('/pages/home/DetailService', {
    service_id,
  })
  //传递id
  uni.navigateTo({ url })
}

//获取服务类型
const getServiceTypeData = async () => {
  const result = await getServiceTypeApi()
  console.log(result)
  if (result.code === 2000) {
    serviceTypeList.value = result.data
    getServiceData(serviceTypeList.value[0].service_type_id)
  }
}

//通过宠物服务类型id来获取对应的服务
const getServiceData = async (service_type_id) => {
  const result = await getServiceAPI(service_type_id)
  if (result.code === 2000) {
    serviceList.value = result.data
  }
}

//跳转到详细服务
const gotoDetail = () => {}

//跳转的领养宠物
const jumpAdopt=()=>{
  uni.switchTab({
    url:'/pages/messages/index'
  })
}

//获取对应的宠物类型
onMounted(() => {
  getServiceTypeData()
})
</script>

<style lang="scss" scoped>
.service-type {
  margin-top: 10px;
}
::v-deep .uni-card__header {
  border-bottom: 0 !important;
}

.hot-service {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.type-service {
  padding: 12rpx;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
</style>
