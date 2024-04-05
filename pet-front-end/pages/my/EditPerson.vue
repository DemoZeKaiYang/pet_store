<template>
  <view class="container">
    <view class="ui-all">
      <view class="avatar" @tap="avatarChoose">
        <view class="imgAvatar">
          <view
            class="iavatar"
            :style="'background: url(' + store.avatar + ') no-repeat center/cover #eeeeee;'"
          >
          </view>
        </view>
        <text>修改头像</text>
      </view>
      <view class="ui-list">
        <text>昵称</text>
        <input
          type="text"
          placeholder="请填写用户名4到16位(字母，数字，下划线)"
          v-model="store.user.user_name"
          placeholder-class="place"
        />
      </view>

      <view class="ui-list right">
        <text>生日</text>
        <picker mode="date" :value="store.user.user_birthday" @change="bindDateChange">
          <view class="picker">
            {{ store.user.user_birthday }}
          </view>
        </picker>
      </view>
      <view class="ui-list">
        <text>签名</text>
        <textarea
          placeholder="请填写"
          placeholder-class="place"
          v-model="store.user.user_signature"
        ></textarea>
      </view>
      <button class="save" @tap="saveInfo">保 存 修 改</button>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue'
import { useUserStore } from '@/stores/user'
import request from '@/utils/request'
import uploads from '@/utils/uploads.js'
import { devUrl } from '@/config.js'
const store = useUserStore()
// 日期改变的事件
const bindDateChange = (e) => {
  store.updateDate(e.detail.value)
}

//选择头像
const avatarChoose = async () => {
  const result = await uploads({
    url: devUrl + '/user/upload',
    name: 'avatar',
  })
  if (result.code === 200) {
    store.updateAvatar(result.data.user_avatar)
    uni.showToast({
      title: '上传图像成功',
    })
  }
  
}
const saveInfo = () => {
  // 保存信息,需要先验证信息
  const namePattern = /^[\u0041-\u005A\u0061-\u007A\u4E00-\u9FFF0-9_]{4,16}$/
  const birthdayPattern = /^\d{4}-\d{2}-\d{2}$/

  //姓名的验证
  if (store.user.user_name === '' || !store.user.user_name) {
    uni.showToast({
      title: '请填写昵称',
      icon: 'none',
      duration: 2000,
    })
    return
  }

  if (!namePattern.test(store.user.user_name)) {
    uni.showToast({
      title: '请填写昵称的正确格式,由4到16位(字母，数字，下划线，中文)',
      icon: 'none',
      duration: 4000,
    })
    return
  }

  //生日
  if (store.user.user_birthday === '' || !store.user.user_birthday) {
    uni.showToast({
      title: '请选择日期',
      icon: 'none',
      duration: 2000,
    })
    return
  }

  if (!birthdayPattern.test(store.user.user_birthday)) {
    uni.showToast({
      title: '请选择正确的时间',
      icon: 'none',
      duration: 4000,
    })
    return
  }
  //计算选中的时间是不是未来
  let today = new Date()
  let date = new Date(store.user.user_birthday)
  if (date > today) {
    uni.showToast({
      title: '您选择的生日是未来',
      icon: 'none',
      duration: 4000,
    })
    return
  }

  //调用pinia，保存信息
  if (store.saveInfo()) {
    uni.showToast({
      title: '修改用户成功',
    })
    uni.switchTab({
      url: '/pages/my/index',
    })
  }
}
</script>

<style lang="scss">
.container {
  display: block;
}

.ui-all {
  padding: 20rpx 40rpx;

  .avatar {
    width: 100%;
    text-align: left;
    padding: 20rpx 0;
    border-bottom: solid 1px #f2f2f2;
    position: relative;

    .imgAvatar {
      width: 140rpx;
      height: 140rpx;
      border-radius: 50%;
      display: inline-block;
      vertical-align: middle;
      overflow: hidden;

      .iavatar {
        width: 100%;
        height: 100%;
        display: block;
      }
    }

    text {
      display: inline-block;
      vertical-align: middle;
      color: #8e8e93;
      font-size: 28rpx;
      margin-left: 40rpx;
    }

    &:after {
      content: ' ';
      width: 20rpx;
      height: 20rpx;
      border-top: solid 1px #030303;
      border-right: solid 1px #030303;
      transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      /* IE 9 */
      -moz-transform: rotate(45deg);
      /* Firefox */
      -webkit-transform: rotate(45deg);
      /* Safari 和 Chrome */
      -o-transform: rotate(45deg);
      position: absolute;
      top: 85rpx;
      right: 0;
    }
  }

  .ui-list {
    width: 100%;
    text-align: left;
    padding: 20rpx 0;
    border-bottom: solid 1px #f2f2f2;
    position: relative;

    text {
      color: #4a4a4a;
      font-size: 28rpx;
      display: inline-block;
      vertical-align: middle;
      min-width: 150rpx;
    }

    input {
      color: #030303;
      font-size: 30rpx;
      display: inline-block;
      vertical-align: middle;
    }

    button {
      color: #030303;
      font-size: 30rpx;
      display: inline-block;
      vertical-align: middle;
      background: none;
      margin: 0;
      padding: 0;

      &::after {
        display: none;
      }
    }

    picker {
      width: 90%;
      color: #030303;
      font-size: 30rpx;
      display: inline-block;
      vertical-align: middle;
      position: absolute;
      top: 28rpx;
      left: 150rpx;
    }

    textarea {
      color: #030303;
      font-size: 30rpx;
      vertical-align: middle;
      height: 150rpx;
      width: 100%;
      margin-top: 50rpx;
    }

    .place {
      color: #999999;
      font-size: 28rpx;
    }
  }

  .right:after {
    content: ' ';
    width: 20rpx;
    height: 20rpx;
    border-top: solid 1px #030303;
    border-right: solid 1px #030303;
    transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    /* IE 9 */
    -moz-transform: rotate(45deg);
    /* Firefox */
    -webkit-transform: rotate(45deg);
    /* Safari 和 Chrome */
    -o-transform: rotate(45deg);
    position: absolute;
    top: 40rpx;
    right: 0;
  }

  .save {
    background: #030303;
    border: none;
    color: #ffffff;
    margin-top: 40rpx;
    font-size: 28rpx;
  }
}
</style>
