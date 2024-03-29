import { defineStore } from 'pinia'
import Socket from '@/request/websocket'
import { useAdminStore } from './admin'
const adminStore = useAdminStore()
export const useSocketStore = defineStore('socket', () => {
  const socket = ref(null)
  const users = ref([])
  const list = ref([
    {
      message_id: 'eefad6e0-ed49-4ea0-a18d-3ecd654f21ea',
      message: '您好',
      message_date: '2024-03-27T03:30:35.000Z',
      message_user_id: '964d7057-a798-418c-ad41-72297dfbcf57',
      message_order: 1,
      message_admin_id: 'de74bc32-47ce-47fa-b275-3da8e5a3c7b9',
      message_type: 1,
      user: { user_avatar: 'default.png' },
      admin: { admin_avatar: 'default.png' }
    },
    {
      message_id: '98086def-07db-4847-997f-b540f8f1b0e7',
      message: '您好,请问有什么可以帮助您。',
      message_date: '2024-03-27T03:30:35.000Z',
      message_user_id: '964d7057-a798-418c-ad41-72297dfbcf57',
      message_order: 2,
      message_admin_id: 'de74bc32-47ce-47fa-b275-3da8e5a3c7b9',
      message_type: 2,
      user: { user_avatar: 'default.png' },
      admin: { admin_avatar: 'default.png' }
    },
    {
      message_id: '11a2ae57-c4b3-4519-8af6-f54550888164',
      message: '您好',
      message_date: '2024-03-27T01:12:40.000Z',
      message_user_id: '964d7057-a798-418c-ad41-72297dfbcf57',
      message_order: 4,
      message_admin_id: 'de74bc32-47ce-47fa-b275-3da8e5a3c7b9',
      message_type: 1,
      user: { user_avatar: 'default.png' },
      admin: { admin_avatar: 'default.png' }
    },
    {
      message_id: '4c6fda9c-92de-4111-86af-bc785e6346eb',
      message: '不好',
      message_date: '2024-03-27T01:12:40.000Z',
      message_user_id: '964d7057-a798-418c-ad41-72297dfbcf57',
      message_order: 5,
      message_admin_id: 'de74bc32-47ce-47fa-b275-3da8e5a3c7b9',
      message_type: 1,
      user: { user_avatar: 'default.png' },
      admin: { admin_avatar: 'default.png' }
    },
    {
      message_id: '0796a54b-4de2-420c-a62b-a577b5359a10',
      message: '太难了毕设',
      message_date: '2024-03-27T01:12:40.000Z',
      message_user_id: '964d7057-a798-418c-ad41-72297dfbcf57',
      message_order: 6,
      message_admin_id: 'de74bc32-47ce-47fa-b275-3da8e5a3c7b9',
      message_type: 1,
      user: { user_avatar: 'default.png' },
      admin: { admin_avatar: 'default.png' }
    },
    {
      message_id: 'eca9fa53-424a-4936-9cf1-88310e1fb54b',
      message: '是在难',
      message_date: '2024-03-27T01:12:40.000Z',
      message_user_id: '964d7057-a798-418c-ad41-72297dfbcf57',
      message_order: 7,
      message_admin_id: 'de74bc32-47ce-47fa-b275-3da8e5a3c7b9',
      message_type: 1,
      user: { user_avatar: 'default.png' },
      admin: { admin_avatar: 'default.png' }
    }
  ])
  //初始化websocket
  const initWebSocket = () => {
    socket.value = new Socket(import.meta.env.VITE_API_WEBSOCKET_URL)
    socket.value.connect() //连接
    authentication() //认证身份
    onMsg()
  }

  //发送消息
  const sendMessage = (data) => {
    socket.value.send(JSON.stringify(data))
  }

  //认证身份
  const authentication = () => {
    // console.log(adminStore.admin)
    let obj = {
      id: adminStore.admin.admin_id,
      type: 1
    }
    socket.value.onOpen(() => {
      socket.value.send(JSON.stringify(obj))
    })
  }

  //监听消息
  const onMsg = () => {
    socket.value.onMessage((res) => {
      // console.log(res.data)
      const { type, data, clients } = JSON.parse(res.data)
      switch (type) {
        case 1: //连接类型
          if (clients) users.value = clients
          break
        case 2: //获取历史数据
          list.value = data
          break
        case 3: //用户消息
          list.value.push(data)
          break
      }
      console.log(clients)
    })
  }

  return {
    socket,
    initWebSocket,
    sendMessage,
    onMsg,
    list
  }
})
