class Socket {
  constructor(url) {
    this.url = url
    this.instance = null
  }

  connect() {
    this.instance = new WebSocket(this.url)

    this.instance.onopen = (event) => {}

    this.instance.onmessage = (event) => {
      const data = event.data
    }

    this.instance.onerror = (event) => {
      console.error('WebSocket发生错误:', event)
    }

    this.instance.onclose = (event) => {
      console.log('WebSocket连接已关闭', event)
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
