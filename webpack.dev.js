const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const webpack = require('webpack')

module.exports = merge(common, {
  mode: 'development',
  optimization: {
    usedExports: true
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist/client',
    hot: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
})
