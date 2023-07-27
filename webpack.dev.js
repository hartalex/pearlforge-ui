// Disabling eslint because we know we are running locally
// and it is ok to bring in these extraneous imports using require
/* eslint-disable */
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
/* eslint-enable */

module.exports = merge(common, {
  mode: 'development',
  optimization: {
    usedExports: true,
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist/client',
    hot: true,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
});
