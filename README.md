# simpleddp-wechat-miniprogram-dirver

整合[meteor DDP 协议](https://github.com/meteor/meteor/blob/devel/packages/ddp/DDP.md)(使用[simpleddp](https://github.com/Gregivy/simpleddp))和微信小程序，支持[uniapp](https://uniapp.dcloud.io/)和[wepy](https://wepyjs.github.io/wepy-docs/index.html)

## uniapp中使用
`npm install simpleddp simpleddp-plugin-login  simpleddp-wechat-miniprogram-dirver --save`

```javascript
const simpleDDP = require('simpleddp');
const simpleDDPLogin = require('simpleddp-plugin-login').simpleDDPLogin;

import { UniappDriver } from 'simpleddp-wechat-miniprogram-dirver/UniappDriver';

const config = {
  endpoint: "ws://localhost:3000/websocket",
  SocketConstructor: UniappDriver,
  reconnectInterval: 5000
};
const server = new simpleDDP(config, [simpleDDPLogin]);

```

## wepy中使用
`npm install simpleddp simpleddp-plugin-login  simpleddp-wechat-miniprogram-dirver --save`

```javascript
const simpleDDP = require('simpleddp');
const simpleDDPLogin = require('simpleddp-plugin-login').simpleDDPLogin;

import { WepyDriver } from 'simpleddp-wechat-miniprogram-dirver/WepyDriver';

const config = {
  endpoint: "ws://localhost:3000/websocket",
  SocketConstructor: WepyDriver,
  reconnectInterval: 5000
};
const server = new simpleDDP(config, [simpleDDPLogin]);

```

## 具体DDP协议使用
参见[simpleddp文档](https://github.com/Gregivy/simpleddp)