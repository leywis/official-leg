// vue.config.js
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {

    lintOnSave: false,
  
    // //基本根url配置项
    publicPath: "./",

    //build构建后生成的文件夹
    outputDir: 'dist',

    //静态资源目录
    assetsDir: 'static',

    indexPath: 'index.html',
    filenameHashing: true,
    productionSourceMap: false,

    css: {
      extract: false, // 是否使用css分离插件 ExtractTextPlugin
      sourceMap: false, // 开启 CSS source maps?
      loaderOptions: {}, // css预设器配置项
      modules: false // 启用 CSS modules for all css / pre-processor files.
    },

    chainWebpack: (config) => {
      // 修改文件引入自定义路径
      config.resolve.alias
        .set('@', resolve('src'))
        .set('@assets', resolve('src/assets'))
    }
}

