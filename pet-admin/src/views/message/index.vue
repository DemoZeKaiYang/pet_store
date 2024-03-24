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
            <!-- 客户 -->
            <div class="client" v-for="message in item.content">{{ message }}</div>
            <!-- <div class="my" v-for="i in 100">1</div> -->
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
import socket from '@/request/socket.js'

//聊天消息数组
const textarea = ref('')

//发送按钮的回调事件
const sendMessage = () => {
  console.log(editableTabs.value)
  editableTabs.value[tabIndex.value - 1].content.push(textarea.value)
  socket.emit('message', textarea.value)
  textarea.value = ''
  getMessage()
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

const getMessage = () => {
  socket.on('gbmsg', (data) => {
    editableTabs.value[tabIndex.value].push(data)
  })
}

//加入群里
const join = () => {
  console.log(editableTabs.value[tabIndex.value - 1].name)
  socket.emit('join', editableTabs.value[tabIndex.value - 1].name)
  welcome()
}

//欢迎加入
const welcome = () => {
  socket.on('welcome', (name, len) => {
    editableTabs.value[tabIndex.value - 1].content.push(`欢迎${name},加入`)
  })
}
onMounted(() => {
  getMessage()
  join()
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
</style>
