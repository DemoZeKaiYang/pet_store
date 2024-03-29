import {
  defineStore
} from 'pinia'
import {
  computed,
  ref
} from 'vue'
import {
  WEBSOCKETURL
} from '@/config.js'
import WebSocket from '@/utils/websocket.js'
import {
  useUserStore
} from '@/stores/user.js'
//使用用户仓库

export const useSocketStore = defineStore('socket', () => {
  const userStore = useUserStore()
  const socket = ref(null)
  const list = ref([])
  const initSocket = () => {
    socket.value = new WebSocket(WEBSOCKETURL)
    socket.value.connect()
    //认证身份
    authentication()
    //获取历史聊天记录
    getHistoryMessage()
  }

  //发送消息
  const sendMessage = (data) => {
    let obj = {
      data,
      id: userStore.user.user_id,
      type:3
    }
    socket.value.send(JSON.stringify(obj))
    
  }

  //获取历史数据
  const getHistoryMessage = () => {
    socket.value.onOpen(() => {
      let obj = {
        id: userStore.user.user_id,
        type: 2, //获取历史记录
      }
      socket.value.send(JSON.stringify(obj))
    })
  }


  //监听消息
  const onMes = () => {
    socket.value.onMessage((res) => {
      let {
        type,
        data
      } = JSON.parse(res.data)
      console.log(data);
      switch (type) {
        case 1: //连接类型
          break
        case 2: //获取历史数据
          list.value = data
          break
        case 3: //用户消息
          list.value.push(data)
          break
      }
    })
  }



  //认证身份
  const authentication = () => {
    let obj = {
      id: userStore.user.user_id,
      type: 1, //获取历史记录
    }
    socket.value.onOpen(() => {
      socket.value.send(JSON.stringify(obj))
      // socket.value.onMessage((res) => {
      //   console.log(res)
      // })
    })
  }


  return {
    socket,
    initSocket,
    list,
    sendMessage,
    onMes,
    getHistoryMessage,

  }
})