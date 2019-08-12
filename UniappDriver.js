export class UniappDriver {
  // onerror(err)
  // onmessage(message)
  // onopen
  // onclose

  socket = null;

  constructor(endpoint) {
    const that = this;
    this.socket = uni.connectSocket({
      url: endpoint
    });
    uni.onSocketOpen(function(res) {
      console.debug('：打开' + res);
      that.onopen && that.onopen();
    });
    uni.onSocketError(function(res) {
      console.info('WebSocket连接打开失败，请检查！');
      that.onerror && that.onerror();
    });
    uni.onSocketClose(function(res) {
      console.debug('：关闭' + res);
      that.onclose && that.onclose();
    });
    uni.onSocketMessage(function(res) {
      console.debug('收到服务器内容：' + res.data);
      that.onmessage && that.onmessage(res);
    });
  }

  send(message) {
    console.debug('服务器发送消息：' + message);
    uni.sendSocketMessage({ data: message });
  }
  close() {
    uni.closeSocket();
  }
}
