export abstract class DriverBase {
  onerror!: Function;
  onmessage!: Function;
  onopen!: Function;
  onclose!: Function;

  socket = null;

  get api(): any | undefined {
    return null;
  }

  constructor(endpoint: any) {
    const that = this;
    this.socket = this.api.connectSocket({
      url: endpoint
    });
    this.api.onSocketOpen(function(res: any) {
      //   console.debug('：打开' + res);
      that.onopen && that.onopen();
    });
    this.api.onSocketError(function(res: any) {
      //   console.info('WebSocket连接打开失败，请检查！');
      that.onerror && that.onerror();
    });
    this.api.onSocketClose(function(res: any) {
      //   console.debug('：关闭' + res);
      that.onclose && that.onclose();
    });
    this.api.onSocketMessage(function(res: any) {
      //   console.debug('收到服务器内容：' + res.data);
      that.onmessage && that.onmessage(res);
    });
  }

  send(message: any) {
    // console.debug('服务器发送消息：' + message);
    this.api.sendSocketMessage({ data: message });
  }
  close() {
    this.api.closeSocket();
  }
}
