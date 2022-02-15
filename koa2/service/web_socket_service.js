const path = require('path')
const fileUtils = require('../utils/file_utils')
// 引入ws
const WebSocket = require('ws')
// 创建ws对象,绑定端口号9998
const wss = new WebSocket.Server({
  port: 9998
})

module.exports.listen = () => {
  // 监听客户端连接事件
  // client代表客户端连接的socket对象
  wss.on('connection', client => {
    client.on('message', async msg => {
      // 进行数据字段约定
      let payload = JSON.parse(msg)
      const action = payload.action
      // 如果是图表
      if (action === 'getData') {
        let filePath = '../data/' + payload.chartName + '.json'
        filePath = path.join(__dirname, filePath)
        const ret = await fileUtils.getFileJsonData(filePath)
        payload.data = ret
        // 监听数据接收事件
        // 主动推送
        client.send(JSON.stringify(payload))
      } else {
        // 如果不是图表,原封不动转发数据
        wss.clients.forEach(client => {
          // 主动推送
          client.send(msg)
        })
      }
    })
  })
}