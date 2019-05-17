// vue.config.js
const CompressionPlugin = require('compression-webpack-plugin')
module.exports = {
    // 选项...
    publicPath: process.env.NODE_ENV === 'production'
    ? '/'
    : '/',
    // devServer: {
    //     port: 8080,
    //     proxy: {
    //         '/api': {
    //             target: 'url',
    //             changeOrigin: true
    //         }
    //     }
    // },
    lintOnSave: false,
    productionSourceMap: false,
    configureWebpack: config => {
        if(process.env.NODE_ENV === 'production'){
            return {
                plugins: [
                    new CompressionPlugin({
                        threshold: 10240, // 10k
                        deleteOriginalAssets: false //是否删除原文件
                    })
                ]
            }
        }
    },
}