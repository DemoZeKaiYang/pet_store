<template>
  <view style="height: 100vh; background: #fff">
    <view class="img-a">
      <view class="t-b">
        您好，
        <br />
        欢迎使用，爱宠之家
      </view>
    </view>
    <view class="login-view" style="">
      <view class="t-login">
        <uni-forms class="cl" :modelValue="formData" ref="form">
          <view class="t-a">
            <text class="txt">手机号</text>
            <uni-forms-item name="phone">
              <input
                type="number"
                name="phone"
                placeholder="请输入您的手机号"
                maxlength="11"
                v-model="formData.phone"
              />
            </uni-forms-item>
          </view>
          <view class="t-a">
            <text class="txt">密码</text>
            <uni-forms-item name="password">
              <input
                type="password"
                name="password"
                maxlength="18"
                placeholder="请输入您的密码"
                v-model="formData.password"
              />
              <!-- 后面在补眼睛 -->
            </uni-forms-item>
          </view>
          <button @tap="register">注册</button>
        </uni-forms>
      </view>
    </view>
  </view>
</template>
<script setup>
import { ref } from 'vue'
import { onReady } from '@dcloudio/uni-app'
import rules from './rules.js'
import requrest from '@/utils/request.js'
import { registerApi } from '../../apis/user.js'
const formData = ref({
  phone: '',
  password: '',
})
const form = ref()
const register = async () => {
  uni.showLoading()
  try {
    await form.value.validate()
    const result = await registerApi(formData.value)
    uni.showToast({
      title: result.message,
    })
    if (result.code === 200) {
      formData.value = {
        phone: '',
        password: '',
      }
      setTimeout(() => {
        uni.navigateBack({
          delta: 1,
          animationType: 'slide-out-left',
          animationDuration: 1000,
        })
      }, 1000)
      return
    }
  } catch (e) {
    console.error(e)
  } finally {
    uni.hideLoading()
  }
}

onReady(() => {
  form.value.setRules(rules)
})
</script>
<style>
.txt {
  font-size: 32rpx;
  font-weight: bold;
  color: #333333;
}

.img-a {
  width: 100%;
  height: 450rpx;
  background-image: url(https://zhoukaiwen.com/img/loginImg/head.png);
  background-size: 100%;
}

.reg {
  font-size: 28rpx;
  color: #fff;
  height: 90rpx;
  line-height: 90rpx;
  border-radius: 50rpx;
  font-weight: bold;
  background: #f5f6fa;
  color: #000000;
  text-align: center;
  margin-top: 30rpx;
}

.login-view {
  width: 100%;
  position: relative;
  margin-top: -120rpx;
  background-color: #ffffff;
  border-radius: 8% 8% 0% 0;
}

.t-login {
  width: 600rpx;
  margin: 0 auto;
  font-size: 28rpx;
  padding-top: 80rpx;
}

.t-login button {
  font-size: 28rpx;
  background: #2796f2;
  color: #fff;
  height: 90rpx;
  line-height: 90rpx;
  border-radius: 50rpx;
  font-weight: bold;
}

.t-login input {
  height: 90rpx;
  line-height: 90rpx;
  margin-bottom: 50rpx;
  border-bottom: 1px solid #e9e9e9;
  font-size: 28rpx;
}

.t-login .t-a {
  position: relative;
}

.t-b {
  text-align: left;
  font-size: 42rpx;
  color: #ffffff;
  padding: 130rpx 0 0 70rpx;
  font-weight: bold;
  line-height: 70rpx;
}

.t-login .uni-input-placeholder {
  color: #aeaeae;
}

.cl {
  zoom: 1;
}

.cl:after {
  clear: both;
  display: block;
  visibility: hidden;
  height: 0;
  content: '\20';
}

:deep(.uni-forms-item__error) {
  top: 70% !important;
}
</style>
