import { defineStore } from 'pinia'

import { useAdminStore } from './admin'
const adminStore = useAdminStore()
export const useSocketStore = defineStore('socket', () => {
  return {
    socket,
    initWebSocket,
    onMsg,
    list,
    users,
    tabIndex,
    getHistory,
    sendMsg,
    closeSocket
  }
})
