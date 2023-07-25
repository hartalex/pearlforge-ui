import express from 'express'; import path from 'path';
import webpack from 'webpack';
import {authenticatedRoutes, unauthenticatedRoutes} from './api/routes';
import {ENV_PRODUCTION, ROUTES_BASE, ROUTES_API, DIR_DIST, FILE_INDEX, PORT, MESSAGE_APP_LISTENING_ON_PORT} from './constants'
const app = express();


export const server = env => {
  if (env !== ENV_PRODUCTION) {
    // Tell express to use the webpack-dev-middleware and use the webpack.config.js
    // configuration file as a base.
    const webpackDevMiddleware = require('webpack-dev-middleware');
    const config = require('../webpack.dev.js');
    const compiler = webpack(config);
    app.use(
      webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath,
      }),
    );
  } else {
    app.use(
      express.static(path.join(__dirname, DIR_DIST), {index: FILE_INDEX}),
    );
  }
  app.use(ROUTES_BASE, unauthenticatedRoutes());
  app.use(ROUTES_API, authenticatedRoutes());

  // Start the server
  app.listen(PORT, function() {
    console.log(`${MESSAGE_APP_LISTENING_ON_PORT} ${PORT}!\n`);
  });
};
server(process.env.NODE_ENV);
