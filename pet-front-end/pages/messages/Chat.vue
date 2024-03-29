<template>
  <view class="">
    <scroll-view
      scroll-y="true"
      class="scroll-box"
      :style="{ height: windowObj.windowHeight - windowObj.statusBarHeight - 94 + 'px' }"
      :scroll-top="scrollHeight"
      @scrolltoupper="loadMores"
    >
      <view class="scroll-view">
        <view class="news-box" v-for="(item, index) in socketStore.list" :key="index">
          <!-- 头像 -->
          <image
            class="avatar"
            :class="[item.message_type===1 ? 'is-me' : 'avatar-right']"
            
            :src="`${devUrl}/uploads/${(item.message_type===1?item.user.user_avatar:item.admin.admin_avatar)}`"
            mode="aspectFill"
          ></image>

          <!-- 消息 -->
          <view class="message-box" :class="{ 'is-me': item.message_type===1 }">
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
          v-model="inputValue"
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
import { computed, onMounted, ref, nextTick } from 'vue'
import { onShow ,onLoad} from '@dcloudio/uni-app'
import { devUrl } from '@/config'
import { useUserStore } from '@/stores/user.js'
import {useSocketStore} from '@/stores/socket.js'
//使用用户仓库
const userStore = useUserStore()

//使用socket仓库
const socketStore=useSocketStore()
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
//发送消息
const sendMessage=()=>{
  socketStore.sendMessage(inputValue.value)
  inputValue.value=""
}

  
onLoad(()=>{
   socketStore.initSocket()
   socketStore.onMes()
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
