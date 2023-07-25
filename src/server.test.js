jest.mock('express')
jest.mock('path')
jest.mock('webpack')
jest.mock('webpack-dev-middleware')
jest.mock('../webpack.dev.js')
jest.mock('./api/routes')
import { server } from './server.js'
import { ENV_PRODUCTION} from './constants'

describe('Server Unit Tests', async () => {
  it('Non Prod test', async () => {
    require('./server')
  })

  it('Prod test', async () => {
    server(ENV_PRODUCTION)
  })
})
