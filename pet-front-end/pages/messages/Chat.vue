<template>
  <view class="">
    <scroll-view
      scroll-y="true"
      class="scroll-box"
      :style="{ height: windowObj.windowHeight - windowObj.statusBarHeight - 94 + 'px' }"
      :scroll-top="scrollHeight"
      @scrolltoupper="loadMores"
      ref="scrollview"
    >
      <view class="scroll-view">
        <view class="news-box" v-for="(item, index) in list" :key="index">
          <!-- 头像 -->
          <image
            class="avatar"
            :class="[item.message_type === 1 ? 'is-me' : 'avatar-right']"
            :src="`${devUrl}/uploads/${
              item.message_type === 1 ? item.user.user_avatar : item.admin.admin_avatar
            }`"
            mode="aspectFill"
          ></image>

          <!-- 消息 -->
          <view class="message-box" :class="{ 'is-me': item.message_type === 1 }">
            <text class="message">{{ item.message || '' }}</text>
          </view>
        </view>
      </view>
    </scroll-view>

    <!-- 输入框以及按钮，发送消息部分 -->
    <view class="base-btn">
      <view class="base-con unify-flex">
        <view class="send-image iconfont icon-icon" @tap="tapTo(1)"></view>
        <!-- :value="inputValue" -->
        <input
          class="input-text"
          type="text"
          v-model.trim="inputValue"
          placeholder="说些什么吧"
          @input="getInput"
          @confirm="tapTo(2)"
        />
        <view class="send-input" @tap="sendMessage">发送</view>
      </view>
    </view>
  </view>
</template>

<script setup>
import { computed, onMounted, ref, nextTick, onBeforeUnmount } from 'vue'
import { onShow, onLoad, onHide, onUnload } from '@dcloudio/uni-app'
import { devUrl } from '@/config'
import { useUserStore } from '@/stores/user.js'
import WebSocket from '@/utils/websocket.js'
import { WEBSOCKETURL } from '@/config.js'
//使用用户仓库
const userStore = useUserStore()
const socket = ref(null)
const scrollview = ref()

//输入框数据
const inputValue = ref('')
//消息列表
const list = ref([])
//图片
const image = ref('')

//滚动条的位置
const scrollHeight = ref(0)

//获取系统的信息
const windowObj = computed(() => {
  let obj
  uni.getSystemInfo({
    success: (res) => {
      obj = res
    },
  })

  return obj
})
//重新设置滚动条高度
const setScrollTop = () => {
  nextTick(() => {
    let scrollView = uni.createSelectorQuery().select('.scroll-view')
    scrollView
      .fields({ size: true }, (data) => {
        let height = data.height
        scrollHeight.value = height
      })
      .exec()
  })
}

const onMessage = () => {
  socket.value.onMessage((res) => {
    let { type, data } = JSON.parse(res.data)
    switch (type) {
      case 1: //连接类型
        break
      case 2: //获取历史数据
        list.value = data
        setScrollTop()
        break
    }
  })
}
const initSocket = () => {
  socket.value = new WebSocket(WEBSOCKETURL)
  socket.value.connect()
  socket.value.onOpen(() => {
    //认证身份
    authentication()
    //获取历史聊天记录
    getHistoryMessage()
  })
}

//发送消息
const sendMessage = () => {
  if (inputValue.value === '')
    return uni.showToast({
      title: '输入的消息不能为空',
      icon: 'none',
    })

  socket.value.send(
    JSON.stringify({
      data: inputValue.value,
      id: userStore.user.user_id,
      type: 3,
    })
  )
  inputValue.value = ''
  setScrollTop()
}

//获取历史数据
const getHistoryMessage = () => {
  socket.value.send(
    JSON.stringify({
      id: userStore.user.user_id,
      type: 2, //获取历史记录
    })
  )
}

//认证身份
const authentication = () => {
  socket.value.send(
    JSON.stringify({
      id: userStore.user.user_id,
      type: 1, //获取历史记录
    })
  )
}
onLoad(() => {
  initSocket()
  onMessage()
})

onUnload(() => {
  //告知管理员该用户退出
  socket.value.send(
    JSON.stringify({
      id: userStore.user.user_id,
      type: 8, //获取历史记录
    })
  )
  socket.value.close()
})
</script>

<style lang="scss" scoped>
// @import url("/uni_modules/mini-chat/static/iconfont.css");
.base-btn {
  position: fixed;
  width: 100%;
  height: 50px;
  bottom: var(--window-bottom);
  left: 0;
  justify-content: space-between;
  background-color: #ffffff;
}

.base-con {
  margin-top: 7.5px;
  display: flex;
  height: inherit;
  align-items: center;
  justify-content: space-between;
}

.send-image {
  width: 35px;
  line-height: 35px;
  background-color: #2979ff;
  border-radius: 50%;
  text-align: center;
  color: #ffffff;
  font-size: 30rpx;
}

.input-text {
  width: 58%;
  height: 35px;
  background-color: #f2f2f2;
  border-radius: 8px;
  padding: 0 15px;
}

.send-input {
  width: 64px;
  line-height: 35px;
  text-align: center;
  background-color: #2979ff;
  border-radius: 8px;
  color: #ffffff;
}

.scroll-view,
.base-con {
  margin: 0 15px;
}

.avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  float: left;
  margin-top: 20px;
}

.avatar-right {
  margin-right: 10px;
}

.message-box {
  max-width: 76%;
  display: inline-block;
  word-wrap: break-word; /* 控制消息框换行 */
}

.message {
  font-size: 24rpx;
  background-color: #e6e6e6;
  padding: 15px;
  float: left;
  border-radius: 8px;
  overflow: hidden;
  word-break: break-all;
  white-space: pre-wrap;
  margin-top: 20px;
}

.message-image {
  width: 80px;
  height: 130px;
  padding: 15px 0;
  border-radius: 8px;
  overflow: hidden;
}

.news-box::after {
  content: '';
  display: block;
  clear: both;
}

.news-box:last-child .message {
  margin-bottom: 20px;
}

.is-me {
  float: right;
  margin-left: 10px;
}
</style>
