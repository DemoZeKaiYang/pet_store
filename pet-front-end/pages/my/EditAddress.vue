<template>
  <view>
    <view class="editaddress">
      <view class="content">
        <uni-forms :modelValue="formData" ref="form">
          <uni-forms-item name="address_name">
            <view class="row">
              <view class="nominal">收货人</view>
              <view class="input"
                ><input
                  placeholder="请输入收货人姓名"
                  v-model="formData.address_name"
                  type="text"
                />
              </view>
            </view>
          </uni-forms-item>
          <uni-forms-item name="address_phone">
            <view class="row">
              <view class="nominal">电话号码</view>
              <view class="input"
                ><input
                  placeholder="请输入收货人电话号码"
                  v-model="formData.address_phone"
                  type="number"
                  maxlength="11"
              /></view>
            </view>
          </uni-forms-item>
          <uni-forms-item name="address_area">
            <view class="row">
              <view class="nominal">所在地区</view>
              <view class="input selectcity" @tap="openPicker">
                <view style="color: #808080">
                  {{ formData.address_area }}
                </view>
                <input
                  placeholder="请选择省市区"
                  readonly
                  type="text"
                  disabled
                  v-model="formData.address_area"
                  ref="selectArea"
                  style="display: none"
                />
                <!-- <image src="/static/right.png" class="rights"></image> -->
              </view>
            </view>
          </uni-forms-item>
          <uni-forms-item name="address_details">
            <view class="row">
              <view class="nominal">详细地址</view>
              <view class="input">
                <textarea
                  style="font-size: 28rpx"
                  v-model="formData.address_details"
                  auto-height="true"
                  placeholder="输入详细地址"
                  v-if="show == false"
                ></textarea>
              </view>
            </view>
          </uni-forms-item>
          <uni-forms-item name="address_default">
            <view class="row">
              <view class="nominal" style="color: #2979ff; margin-top: 10rpx">设为默认地址</view>
              <view class="input switch">
                <switch

                  style="transform: scale(0.8)"
                  @change="switchChange"
                  :checked="formData.address_default == 1"
                ></switch>
              </view>
            </view>
          </uni-forms-item>
        </uni-forms>
      </view>
      <view class="save">
        <view class="btn"  @tap="saveAddress">保存地址</view>
      </view>
      <!-- 省市区选择 province city area初始省市区设置 show:是否显示  @sureSelectArea：确认事件 @hideShow：隐藏事件-->
      <SelectCit
        :show="show"
        @changeClick="changeClick"
        @sureSelectArea="onsetCity"
        @hideShow="onhideShow"
      ></SelectCit>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue'
import SelectCit from './components/SelectCity.vue'
import { onReady, onLoad } from '@dcloudio/uni-app'
import rules from './addressRules.js'
import { useUserStore } from '@/stores/user.js'
import { updateAddressApi } from '../../apis/address'
const store = useUserStore()
const formData = ref({
  address_name: '',
  address_phone: '',
  address_area: '请选择省市区',
  address_details: '',
  address_default: 0,
  user_id: store.user.user_id,
})
const form = ref()
const selectArea = ref()
// 定义响应式数据
const show = ref(false)
const isShow = ref(true)

//保存地址
const saveAddress = async () => {
  try {
    console.log(formData.value);
    await form.value.validate()
    const result = await updateAddressApi(formData.value)
    if (result.code === 200) {
      uni.showToast({
        title: '修改成功',
      })
      uni.$emit('renderAddress')
      uni.navigateBack({
        delta: 1,
        animationType: 'slide-out-left',
        animationDuration: 1000,
      })
    } else {
      uni.showToast({
        title: result.message,
      })
    }
  } catch (e) {
    console.log(e)
  }
}
// 打开地址选择器
const openPicker = () => {
  console.log('执行打开地址选择器')
  show.value = true
}
const changeClick = (value, value2, value3) => {
  formData.value.address_area = value + '-' + value2 + '-' + value3
}
const onhideShow = () => {
  show.value = false
  console.log('执行了关闭地址选择器')
}
// 默认地址的回调
const switchChange = (e) => {
  // 处理逻辑
  if (e.detail.value) {
    formData.value.address_default = 1
  } else {
    formData.value.address_default = 0
  }
}
onLoad((query) => {
  if (Object.keys(query).length !== 0) {
    let obj = {}
    for (let i in query) {
      obj[decodeURIComponent(i)] = decodeURIComponent(query[i])
    }
    formData.value = obj
  }
})
onReady(() => {
  form.value.setRules(rules)
})
</script>
<style lang="scss" scoped>
.save {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 120rpx;
  display: flex;
  justify-content: center;
  align-items: center;
}

.save view {
  display: flex;
}

.save .btn {
  box-shadow: 0rpx 5rpx 10rpx rgba(0, 0, 0, 0.4);
  width: 70%;
  height: 80rpx;
  border-radius: 80rpx;
  background-color: #2979ff;
  color: #fff;
  justify-content: center;
  align-items: center;
  font-size: 30rpx;
  margin-bottom: 60px;
}

.save .btn .icon {
  height: 80rpx;
  color: #fff;
  font-size: 30rpx;
  justify-content: center;
  align-items: center;
}

.content {
  display: flex;
  flex-wrap: wrap;
  margin-top: 40rpx;
}

.content view {
  display: flex;
}

:deep(.uni-forms-item) {
  width: 100%;
}

.content .row {
  width: 100%;
  margin: 0 10rpx;
  border-bottom: solid 1rpx #eee;
}

.content .row .nominal {
  width: 30%;
  height: 80rpx;
  font-size: 28rpx;
  font-family: Droid Sans Fallback;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  align-items: center;
}

.content .row .input {
  width: 70%;
  padding: 20rpx 0;
  align-items: center;
  font-size: 28rpx;
}

.content .row .input input {
  font-size: 28rpx;
  color: #333333;
}

.content .row .switch {
  justify-content: flex-end;
}

.content .row .input textarea {
  min-height: 40rpx;
  line-height: 40rpx;
}

.content .del_box {
  width: 100%;
  display: block;
  overflow: hidden;
  margin-right: 30rpx;
}

.content .del {
  width: 240rpx;
  height: 80rpx;
  float: right;
  justify-content: center;
  align-items: center;
  font-size: 28rpx;
  color: #f23a3a;
  margin: 0 auto;
  margin-top: 50rpx;
  border-radius: 38rpx;
  background-color: rgba(255, 0, 0, 0.05);
  border-bottom: solid 1rpx #eee;
}

.selectcity input {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.selectcity image {
  width: 40rpx;
  height: 40rpx;
  float: right;
}

:deep(.uni-forms) {
  width: 100%;
}

:deep(uni-form) {
  width: 100%;
}

:deep(.uni-forms-item__error) {
  text-align: center;
  left: 30%;
  font-size: 24rpx;
}
</style>
