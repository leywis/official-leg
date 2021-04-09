const path = require('path')
function resolve (dir) {
  return path.join(__dirname, './', dir)
}
module.exports = {
    chainWebpack: (config) => {
       // 修改文件引入自定义路径
        config.resolve.alias
          .set('@', resolve('src'))
          .set('@assets', resolve('src/assets'))
      },
}
