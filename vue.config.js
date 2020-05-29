// 基础路径 注意发布之前要先修改这里
let baseUrl = './'
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
module.exports = {
  publicPath: baseUrl, // 根据你的实际情况更改这里
    lintOnSave: false,
    productionSourceMap: false,
    // configureWebpack: config => {
    //     if (process.env.NODE_ENV === 'production') {
    //         return {
    //             plugins: [
    //                 new BundleAnalyzerPlugin()
    //             ]
    //         }
    //     }
    // },
   // 配置转发代理
  devServer: {
  	open:true,
    disableHostCheck: true,
    port: 8080,
    proxy: {
      "/": {
        target: url,
        ws: false, // 需要websocket 开启
        pathRewrite: {
          "^/": "/"
        }
      }
      // 3.5 以后不需要再配置
    }
  }
}