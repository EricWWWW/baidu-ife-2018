const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(common, {
    devtool:'inline-source-map',
    mode:'development',
    devServer: {
        contentBase: './dist',
        hot:true,
        noInfo: true,  //webpack 包(bundle)消息将被隐藏。错误和警告仍然会显示。
        compress: true    // 服务端压缩是否开启
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
});