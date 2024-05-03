<template>
  <el-empty :image-size="200" v-if="users.length <= 0" description="暂无用户咨询问题" />
  <el-tabs
    v-model="tabIndex"
    type="card"
    class="demo-tabs"
    closable
    @tab-remove="removeTab"
    @tab-change="tabChange"
    v-else
  >
    <el-tab-pane v-for="item in users" :key="item.user_id" :name="item.user_id">
      <template v-slot:label>
        <!-- header 插槽的内容放这里 -->
        <img :src="`${DEVURL}/uploads/${item.user_avatar}`" class="avatar" />
        <!-- 用户名 -->
        <div>{{ item.user_name }}</div>
      </template>
      <template v-slot>
        <div class="chat-main">
          <div class="chat" ref="scrollContain">
            <div class="scroll-view">
              <div class="news-box" v-for="(item, index) in list" :key="index">
                <!-- 头像 -->
                <img
                  class="avatar"
                  :class="[item.message_type !== 1 ? 'is-me' : 'avatar-right']"
                  :src="`${DEVURL}/uploads/${
                    item.message_type !== 1 ? item.admin.admin_avatar : item.user.user_avatar
                  }`"
                />

                <!-- 消息 -->
                <div class="message-box" :class="{ 'is-me': item.message_type !== 1 }">
                  <text class="message">{{ item.message || '' }}</text>
                </div>
              </div>
            </div>
          </div>
          <!-- 编辑器 -->
          <div class="editor">
            <el-input
              v-model="textarea"
              class="message-textarea"
              :rows="6"
              type="textarea"
              placeholder="请输入消息"
              style="min-height: 200px"
              resize="none"
              show-word-limit
              :input-style="{ fontSize: '20px', minHeight: '200px', height: '200px' }"
            />
            <el-button type="primary" class="send" @click="sendMessage">发送</el-button>
          </div>
        </div>
      </template>
    </el-tab-pane>
  </el-tabs>
</template>
<script setup>
import Socket from '@/request/websocket'
const DEVURL = import.meta.env.VITE_API_URL
import { useAdminStore } from '@/stores/admin'
import { failMessage } from '@/utils/message'
const adminStore = useAdminStore()
const socket = ref(null)
const users = ref([])
const list = ref([])
const tabIndex = ref('')
const scrollContain = ref()
//聊天消息数组
const textarea = ref('')

//选项卡变化事件，点击不同选项卡，获得不同的用户所对应的历史数据
const tabChange = () => {
  getHistory()
}

//初始化websocket
const initWebSocket = () => {
  socket.value = new Socket(import.meta.env.VITE_API_WEBSOCKET_URL)
  socket.value.connect() //连接
  socket.value.onOpen(() => {
    authentication() //认证身份
    getUser() //获取用户
  })
}

//认证身份
const authentication = () => {
  socket.value.send(JSON.stringify({ id: adminStore.admin.admin_id, type: 4 }))
}

//获取用户
const getUser = () => {
  socket.value.send(
    JSON.stringify({
      id: adminStore.admin.admin_id,
      type: 6
    })
  )
}

//获取历史数据
const getHistory = () => {
  socket.value.send(
    JSON.stringify({
      id: tabIndex.value,
      type: 5
    })
  )
}

const sendMessage = () => {
  if (textarea.value === '') {
    failMessage('不能发送空白消息')
    return
  }
  socket.value.send(
    JSON.stringify({
      id: tabIndex.value,
      type: 7,
      data: textarea.value
    })
  )
  setScroll()
  textarea.value = ''
}
//监听消息
const onMessage = () => {
  socket.value.onMessage((res) => {
    const { type, data } = JSON.parse(res.data)
    switch (type) {
      case 4: //连接类型
        break
      case 5: //获取历史数据
        list.value = data
        setScroll()
        break
      case 6: //获取所有用户
        ElNotification({
          title: 'Success',
          message: '已帮您获取当前有哪些客户想要咨询',
          type: 'success'
        })
        users.value = data
        break
      case 8:
        ElNotification({
          title: 'Info',
          message: data,
          type: 'info'
        })
        break
    }
  })
}

//设置滚动到底部
const setScroll = () => {
  nextTick(() => {
    scrollContain.value[0].scrollTop = scrollContain.value[0].scrollHeight
  })
}
//关闭websocket
const closeSocket = () => {
  socket.value.send(
    JSON.stringify({
      id: adminStore.admin_id,
      type: 9
    })
  )
  socket.value.close()
}
const removeTab = (name) => {
  users.value = users.value.filter((item) => {
    return item.user_id !== name
  })
}
onMounted(() => {
  initWebSocket()
  onMessage()
})

onBeforeUnmount(() => {
  closeSocket()
})
</script>
<style lang="scss" scoped>
.avatar {
  width: 50px;
  height: 50px;
  display: inline-block;
}

.chat-main {
  position: relative;

  .chat {
    box-sizing: border-box;
    width: 100%;
    height: 500px;
    border: 1px solid #cccccc;
    overflow: auto;

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
      // background-color: #c9c8c8;
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
  }

  .message-textarea {
    width: 100%;
    height: 200px;
  }
}

.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}

.editor {
  box-sizing: border-box;
  position: relative;
  border: 1px solid #ccc;
  .send {
    position: absolute;
    bottom: 10px;
    right: 10px;
    height: 40px;
    width: 100px;
    font-size: 20px;
  }
}

//消息css
.scroll-view,
.base-con {
  margin: 0 15px;
}

.scroll-view {
  height: 100%;
}
</style>
