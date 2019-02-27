// vue.config.js
const CompressionPlugin = require('compression-webpack-plugin')
module.exports = {
    // 选项...
    publicPath: process.env.NODE_ENV === 'production'
    ? '/production-sub-path/'
    : '/',
    // devServer: {
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