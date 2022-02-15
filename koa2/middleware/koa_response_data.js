// 处理业务逻辑中间件，读取某个json数据文件
const path = require('path')
const fileUtils = require('../utils/file_utils')
module.exports = async (ctx, next) => {
  const url = ctx.request.url
  let filePath = url.replace('/api', '')
  filePath = '../data' + filePath + '.json'
  filePath = path.join(__dirname, filePath)

  try {
    const ret = await fileUtils.getFileJsonData(filePath)
    ctx.response.body = ret
  } catch (error) {
    const errorMsg = {
      message: '读取文件内容失败，文件资源部存在',
      status: 404
    }
    ctx.response.body = JSON.stringify(errorMsg)
  }

  await next()
}