// 服务器入口文件

// 引入
const Koa = require('koa')
const app = new Koa()

// 中间件
const respDurationMiddleware = require('./middleware/koa_response_duration')
app.use(respDurationMiddleware)

const respHeaderMiddleware = require('./middleware/koa_response_header')
app.use(respHeaderMiddleware)

const respDataMiddleware = require('./middleware/koa_response_data')
app.use(respDataMiddleware)

// 监听
app.listen(8888)

// 引入
const webSocketService = require('./service/web_socket_service')
webSocketService.listen()