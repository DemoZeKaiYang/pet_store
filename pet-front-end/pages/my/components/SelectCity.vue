<template>
  <view>
    <!--自定义地址选择器-->
    <view class="cc_area_mask" v-show="show"></view>
    <view :class="'cc_area_view ' + (show ? 'show':'hide')">
      <view class="cc_area_view_btns">
        <text class="cc_area_view_btn_cancle" @tap="handleNYZAreaCancle">取消</text>
        <text class="cc_area_view_btn_sure" @tap="handleNYZAreaSelect" :data-province="province" :data-city="city"
          :data-area="area">确定</text>
      </view>
      <picker-view class="cc_area_pick_view" indicator-style="height: 35px;" @change="handleNYZAreaChange"
        :value="addressIndex">
        <picker-view-column>
          <view v-for="(item, index) in provinces" :key="index" class="cc_area_colum_view">{{item}}</view>
        </picker-view-column>
        <picker-view-column>
          <view v-for="(item, index) in citys" :key="index" class="cc_area_colum_view">{{item}}</view>
        </picker-view-column>
        <picker-view-column>
          <view v-for="(item, index) in areas" :key="index" class="cc_area_colum_view">{{item}}</view>
        </picker-view-column>
      </picker-view>
    </view>
  </view>
</template>

<script setup>
  import {
    ref
  } from 'vue'
  import {
    getProvinces,
    getMyCity,
    getAreas
  } from '../area.js'
  const props = defineProps({
    show: {
      type: Boolean,
      default: false
    }
  })
  const emit = defineEmits(['hideShow', 'changeClick'])
  const addressIndex = ref([0, 0, 0])
  //省份
  const provinces = ref(getProvinces())
  //选中省份
  const selectProvinces = ref(0)
  //市区
  const citys = ref(getMyCity(addressIndex.value[0]))
  //镇
  const areas = ref(getAreas(addressIndex.value[0], addressIndex.value[1]))
  //事件

  //选中
  const handleNYZAreaSelect = () => {
    let data1 = provinces.value[addressIndex.value[0]]
    let data2 = citys.value[addressIndex.value[1]]
    let data3 = areas.value[addressIndex.value[2]]
    //将数据回传给
    emit('changeClick', data1, data2, data3)
    //清除
    addressIndex.value = [0, 0, 0]
    provinces.value = getProvinces()
    citys.value = getMyCity(addressIndex.value[0])
    areas.value = getAreas(addressIndex.value[0], addressIndex.value[1])
    emit('hideShow')
  }

  const handleNYZAreaChange = (event) => {
    if (event.detail.value[0] !== selectProvinces.value) {
      addressIndex.value = [event.detail.value[0], 0, 0]
      citys.value = getMyCity(addressIndex.value[0])
      areas.value = getAreas(addressIndex.value[0], addressIndex.value[1])
      selectProvinces.value = event.detail.value[0]
    } else {
      addressIndex.value = event.detail.value
      citys.value = getMyCity(addressIndex.value[0])
      areas.value = getAreas(addressIndex.value[0], addressIndex.value[1])
    }
  }
  const handleNYZAreaCancle = () => {
    //清除
    addressIndex.value = [0, 0, 0]
    provinces.value = getProvinces()
    citys.value = getMyCity(addressIndex.value[0])
    areas.value = getAreas(addressIndex.value[0], addressIndex.value[1])
    emit('hideShow')
  }
</script>
<style scoped lang="scss">
  .cc_area_view {
    width: 100%;
    position: fixed;
    bottom: -1000px;
    left: 0px;
    background-color: #fff;
    z-index: 21;
    transition: all 0.3s;
  }

  .cc_area_pick_view {
    height: 200px;
    width: 100%;

  }

  .cc_area_colum_view {
    line-height: 35px;
    text-align: center;
    font-size: 28upx;
  }

  .hide {
    bottom: -1000upx;
    transition: all 0.3s;
  }

  .show {
    bottom: 0upx;
    transition: all 0.3s;
  }

  .cc_area_view_btns {
    background-color: #fff;
    border-bottom: 1px solid #eeeeee;
    font-size: 30upx;
    padding: 18upx 0upx;
  }

  .cc_area_view_btns>text {
    display: inline-block;
    word-spacing: 4upx;
    letter-spacing: 4upx;
  }

  .cc_area_view_btn_cancle {
    color: #939393;
    padding-right: 20upx;
    padding-left: 25upx;
  }

  .cc_area_view_btn_sure {
    float: right;
    padding-left: 20upx;
    padding-right: 25upx;
  }

  .cc_area_mask {
    width: 100%;
    height: 100vh;
    background-color: rgba(28, 28, 28, 0.6);
    position: absolute;
    top: 0upx;
    left: 0upx;
    z-index: 20;
  }
</style>