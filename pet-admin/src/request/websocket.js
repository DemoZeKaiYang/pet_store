class Socket {
  constructor(url) {
    this.url = url
    this.instance = null
  }

  connect() {
    this.instance = new WebSocket(this.url)

    this.instance.onopen = (event) => {
      console.log('WebSocket连接已打开')
      // 这里可以调用onOpen的回调，如果有的话
    }

    this.instance.onmessage = (event) => {
      const data = event.data
      // 这里可以调用onMessage的回调，并将数据传递给它
      // 假设你在某个地方存储了这些回调
      // this.onMessageCallbacks.forEach(callback => callback(data));
    }

    this.instance.onerror = (event) => {
      console.error('WebSocket发生错误:', event)
      // 这里可以调用onError的回调，如果有的话
    }

    this.instance.onclose = (event) => {
      console.log('WebSocket连接已关闭', event)
      // 这里可以调用onClose的回调，如果有的话
    }
  }

  send(data) {
    if (this.instance && this.instance.readyState === WebSocket.OPEN) {
      this.instance.send(data)
    } else {
      console.error('WebSocket未连接或不可用')
    }
  }

  close() {
    if (this.instance) {
      this.instance.close()
    }
  }

  // 添加事件监听方法
  onOpen(callback) {
    if (this.instance) {
      this.instance.onopen = (event) => {
        callback(event)
      }
    } else {
      console.error('WebSocket实例未初始化')
    }
  }

  onMessage(callback) {
    if (this.instance) {
      this.instance.onmessage = (event) => {
        callback(event)
      }
    } else {
      console.error('WebSocket实例未初始化')
    }
  }

  onError(callback) {
    if (this.instance) {
      this.instance.onerror = (event) => {
        callback(event)
      }
    } else {
      console.error('WebSocket实例未初始化')
    }
  }

  onClose(callback) {
    if (this.instance) {
      this.instance.onclose = (event) => {
        callback(event)
      }
    } else {
      console.error('WebSocket实例未初始化')
    }
  }
}

export default Socket
