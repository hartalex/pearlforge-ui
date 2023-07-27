import express from 'express';
import path from 'path';
import {
  authenticatedRoutes,
  unauthenticatedRoutes,
} from './api/routes';
import {
  DIR_DIST,
  ENV_PRODUCTION,
  FILE_INDEX,
  MESSAGE_APP_LISTENING_ON_PORT,
  PORT,
  ROUTES_API,
  ROUTES_BASE,
} from './constants';

const app = express();

// eslint-disable-next-line import/prefer-default-export
export const server = (env) => {
  if (env !== ENV_PRODUCTION) {
    // Tell express to use the webpack-dev-middleware and use the webpack.config.js
    // configuration file as a base.
    // Disabling eslint because we know we are running locally
    // and it is ok to bring in these extraneous imports using require
    /* eslint-disable */
    const webpack = require('webpack');
    const webpackDevMiddleware = require('webpack-dev-middleware');
    const config = require('../webpack.dev.js');
    /* eslint-enable */
    const compiler = webpack(config);
    app.use(
      webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath,
      }),
    );
  } else {
    app.use(
      express.static(path.join(__dirname, DIR_DIST), { index: FILE_INDEX }),
    );
  }
  app.use(ROUTES_BASE, unauthenticatedRoutes());
  app.use(ROUTES_API, authenticatedRoutes());

  // Start the server
  app.listen(PORT, () => {
    console.log(`${MESSAGE_APP_LISTENING_ON_PORT} ${PORT}!\n`);
  });
};
server(process.env.NODE_ENV);
