<template>
  <el-tabs v-model="tabIndex" type="card" class="demo-tabs" closable @tab-remove="removeTab">
    <el-tab-pane v-for="item in editableTabs" :key="item.name" :name="item.name">
      <template v-slot:label>
        <!-- header 插槽的内容放这里 -->
        <img src="../../assets/default.png" class="avatar" />
        <!-- 用户名 -->
        <div>123</div>
      </template>
      <template v-slot>
        <div class="chat-main">
          <div class="chat">
            <div class="scroll-view">
              <div class="news-box" v-for="(item, index) in socketStore.list" :key="index">
                <!-- 头像 -->

                <img
                  class="avatar"
                  :class="[item.message_type === 1 ? 'is-me' : 'avatar-right']"
                  :src="`${DEVURL}/uploads/${
                    item.message_type === 1 ? item.user.user_avatar : item.admin.admin_avatar
                  }`"
                />

                <!-- 消息 -->
                <div class="message-box" :class="{ 'is-me': item.message_type === 1 }">
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
import { useSocketStore } from '@/stores/socket'
const DEVURL = import.meta.env.VITE_API_URL
const socketStore = useSocketStore()
//聊天消息数组
const textarea = ref('')

//发送按钮的回调事件
const sendMessage = () => {
  socketStore.sendMessage(textarea.value)
}

const tabIndex = ref('1')
const editableTabs = ref([
  {
    title: 'Tab 1',
    name: 'zekaiyang',
    content: ['123123']
  },
  {
    title: 'Tab 2',
    name: 'test',
    content: ['2222']
  }
])

onMounted(() => {
  // socketStore.onMsg()
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
