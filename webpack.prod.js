// Disabling eslint because webpack config isn't run through babel
/* eslint-disable */
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
/* eslint-disable */

module.exports = merge(common, {
  mode: 'production',
});
