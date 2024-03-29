import {
  WEBSOCKETURL
} from '@/config.js'

class WebSocket {
  constructor(url) {
    this.url = url
    this.instance = null
  }
  connect() {
    this.instance = uni.connectSocket({
      url: this.url,
      complete: () => {}
    })
  }
  send(data) {
    this.instance.send({
      data,
      success: () => {}
    })
  }
  close() {
    this.instance && this.instance.close({
      code: 1000,
      reason: '正常关闭',
      success: () => {

      }
    })
  }

  onOpen(callback) {
    uni.onSocketOpen((res) => {
      callback && callback(res)
    })
  }
  
  onMessage(callback) {
    uni.onSocketMessage((res) => {
      callback && callback(res)
    })
  }
  onError(callback) {
    uni.onSocketError((res) => {
      callback && callback(res)
    })
  }

  onClose(callback) {
    uni.onSocketClose((res) => {
      callback && callback(res)
    })
  }
}

export default WebSocket