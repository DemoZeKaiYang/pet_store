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
        <view class="news-box" v-for="(item, index) in list" :key="index">
          <!-- 头像 -->
          <image
            class="avatar"
            :class="[item.isMe ? 'is-me' : 'avatar-right']"
            :src="item.avatar"
            mode="aspectFill"
          ></image>

          <!-- 消息 -->
          <view class="message-box" :class="{ 'is-me': item.isMe }">
            <text class="message" v-if="item.type !== 2">{{ item.content || '' }}</text>
            <image
              class="message-image"
              :src="item.content"
              mode="aspectFill"
              v-else
              @tap="tapTo(3)"
            ></image>
          </view>
        </view>
      </view>
    </scroll-view>

    <!-- 输入框以及按钮，发送消息部分 -->
    <view class="base-btn">
      <view class="base-con unify-flex">
        <view class="send-image iconfont icon-icon" @tap="tapTo(1)"></view>
        <input
          class="input-text"
          type="text"
          :value="inputValue"
          placeholder="说些什么吧"
          @input="getInput"
          @confirm="tapTo(2)"
        />
        <view class="send-input" @tap="tapTo(2)">发送</view>
      </view>
    </view>
  </view>
</template>

<script setup>
import { computed, onMounted, ref, nextTick } from 'vue'

import { onLoad } from '@dcloudio/uni-app'

import { devUrl } from '@/config'

//输入框数据
const inputValue = ref('')
//消息列表
const list = ref([])
//图片
const image = ref('')

//滚动条的位置
const scrollHeight = ref(0)




onLoad(() => {
  uni.connectSocket({
    url:'ws://192.168.6.4:9000',
    success(res){
      console.log(res);
    },
    fail(err) {
      console.log(err);
    }
  })
})

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

const tabTo = (state) => {
  switch (state) {
    case 1:
      image.value =
        'https://nimg.ws.126.net/?url=http%3A%2F%2Fdingyue.ws.126.net%2F2021%2F0826%2F6def4faej00qygdfw009kd200u001hcg00u001hc.jpg&thumbnail=660x2147483647&quality=80&type=jpg' // 上传的图片路径
      newsSend(2)
      break
    case 2:
      newsSend(1)
      break
    case 3:
      let images = []
      list.value.forEach((item, index) => {
        if (item.type === 2) {
          images.push(item.content)
        }
      })

      uni.previewImage({
        urls: images,
        css: 'background-position: center;background-size:contain;',
      })
      break
    default:
      break
  }
}
const newsSend = (type) => {
  let message = {
    type: 'say',
    message_type: type,
    fromid: 1,
    toid: 2,
    data: type !== 2 ? this.inputValue : this.image,
    fromname: '自己的用户名',
    toname: '对方的用户名',
    isMe: true,
  }

  uni.sendSocketMessage({
    data: JSON.stringify(message),
    complete: (res) => {
      let newsKey = 'content'
      Object.defineProperty(message, newsKey, Object.getOwnPropertyDescriptor(message, 'data'))
      message['type'] = type
      message['avatar'] =
        'https://nimg.ws.126.net/?url=http%3A%2F%2Fdingyue.ws.126.net%2F2021%2F0826%2F6def4faej00qygdfw009kd200u001hcg00u001hc.jpg&thumbnail=660x2147483647&quality=80&type=jpg' // 自己的头像
      delete message['data']
      list.value = list.value.concat([message])
      inputValue.value = ''
    },
  })
  setScrollTop()
}
onMounted(() => {
  initChatLog()
  connectSocket()
})
//初始化对话框
const initChatLog = () => {
  list.value = [
    {
      avatar:
        'https://nimg.ws.126.net/?url=http%3A%2F%2Fdingyue.ws.126.net%2F2021%2F0826%2F890ee899j00qygdfw0028d200u000gwg00zk00k0.jpg&thumbnail=660x2147483647&quality=80&type=jpg',
      isMe: false,
      content: '对方回复的消息',
      type: 1,
    },
    {
      avatar:
        'https://nimg.ws.126.net/?url=http%3A%2F%2Fdingyue.ws.126.net%2F2021%2F0826%2F6def4faej00qygdfw009kd200u001hcg00u001hc.jpg&thumbnail=660x2147483647&quality=80&type=jpg',
      isMe: true,
      content: '我发的消息',
      type: 1,
    },
    {
      avatar:
        'https://nimg.ws.126.net/?url=http%3A%2F%2Fdingyue.ws.126.net%2F2021%2F0826%2F890ee899j00qygdfw0028d200u000gwg00zk00k0.jpg&thumbnail=660x2147483647&quality=80&type=jpg',
      isMe: false,
      content:
        'https://nimg.ws.126.net/?url=http%3A%2F%2Fdingyue.ws.126.net%2F2021%2F0826%2F6def4faej00qygdfw009kd200u001hcg00u001hc.jpg&thumbnail=660x2147483647&quality=80&type=jpg',
      type: 2,
    },
    {
      avatar:
        'https://nimg.ws.126.net/?url=http%3A%2F%2Fdingyue.ws.126.net%2F2021%2F0826%2F6def4faej00qygdfw009kd200u001hcg00u001hc.jpg&thumbnail=660x2147483647&quality=80&type=jpg',
      isMe: true,
      content:
        'https://nimg.ws.126.net/?url=http%3A%2F%2Fdingyue.ws.126.net%2F2021%2F0826%2F6def4faej00qygdfw009kd200u001hcg00u001hc.jpg&thumbnail=660x2147483647&quality=80&type=jpg',
      type: 2,
    },
  ]
}

const connectSocket = () => {
  // let param = that.data,
  //   userInfo = that.userInfo
  // uni.connectSocket({
  //   url: 'wss://*******/wss:8282', // 修改为自己的
  // })
  // uni.onSocketOpen(function (res) {
  //   // console.log('WebSocket连接已打开！', res);
  // })
  // uni.onSocketMessage(function (res) {
  //   var data = JSON.parse(res.data)
  //   switch (data['type']) {
  //     // 绑定id
  //     case 'init':
  //       var bind = {
  //         type: 'bind',
  //         fromid: 2,
  //       }
  //       uni.sendSocketMessage({
  //         data: JSON.stringify(bind),
  //         complete: (res) => {
  //           // console.log(res)
  //         },
  //       })
  //       break
  //     // 接收消息
  //     case 'text':
  //       data['isMe'] = false
  //       data['type'] = data.message_type
  //       that.list = that.list.concat([data])
  //       that.setScrollTop()
  //       break
  //   }
  // })
}

const setScrollTop = () => {
  // 		nextTick(() => {
  // 			let scrollView = uni.createSelectorQuery().select('.scroll-view');
  // 			scrollView.fields({ size: true }, data => {
  // 				let height = data.height;
  // 				this.scrollHeight = height;
  // 			}).exec();
  // 		});
  // 	}
  // }
}
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
