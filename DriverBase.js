"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DriverBase {
    constructor(endpoint) {
        this.socket = null;
        const that = this;
        this.socket = this.api.connectSocket({
            url: endpoint
        });
        this.api.onSocketOpen(function (res) {
            //   console.debug('：打开' + res);
            that.onopen && that.onopen();
        });
        this.api.onSocketError(function (res) {
            //   console.info('WebSocket连接打开失败，请检查！');
            that.onerror && that.onerror();
        });
        this.api.onSocketClose(function (res) {
            //   console.debug('：关闭' + res);
            that.onclose && that.onclose();
        });
        this.api.onSocketMessage(function (res) {
            //   console.debug('收到服务器内容：' + res.data);
            that.onmessage && that.onmessage(res);
        });
    }
    get api() {
        return null;
    }
    send(message) {
        // console.debug('服务器发送消息：' + message);
        this.api.sendSocketMessage({ data: message });
    }
    close() {
        this.api.closeSocket();
    }
}
exports.DriverBase = DriverBase;
