import express from 'express'
import path from 'path'
import webpack from 'webpack'
import { authenticatedRoutes, unauthenticatedRoutes } from './api/routes'
const app = express()

export const server = (env) => {
  if (env !== 'production') {
    // Tell express to use the webpack-dev-middleware and use the webpack.config.js
    // configuration file as a base.
    const webpackDevMiddleware = require('webpack-dev-middleware')
    const config = require('../webpack.dev.js')
    const compiler = webpack(config)
    app.use(
      webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath
      })
    )
  } else {
    app.use(express.static(path.join(__dirname, '../dist'), { index: 'index.html' }))
  }
  app.use('/', unauthenticatedRoutes())
  app.use('/', authenticatedRoutes())

  // Serve the files on port 3000.
  app.listen(3000, function () {
    console.log('Example app listening on port 3000!\n')
  })
}
server(process.env.NODE_ENV)
