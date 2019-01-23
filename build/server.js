"use strict";

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _webpack = _interopRequireDefault(require("webpack"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();

if (process.env.NODE_ENV !== 'production') {
  // Tell express to use the webpack-dev-middleware and use the webpack.config.js
  // configuration file as a base.
  const webpackDevMiddleware = require('webpack-dev-middleware');

  const config = require('../webpack.dev.js');

  const compiler = (0, _webpack.default)(config);
  app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
  }));
} else {
  app.use(_express.default.static(_path.default.join(__dirname, '../dist'), {
    index: 'index.html'
  }));
} // Serve the files on port 3000.


app.listen(3000, function () {
  console.log('Example app listening on port 3000!\n');
});