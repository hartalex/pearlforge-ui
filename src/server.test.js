import { server } from './server';
import { ENV_PRODUCTION } from './constants';

jest.mock('express');
jest.mock('path');
jest.mock('webpack');
jest.mock('webpack-dev-middleware');
jest.mock('../webpack.dev.js');
jest.mock('./api/routes');

describe('Server Unit Tests', async () => {
  it('Non Prod test', async () => {
    // eslint-disable-next-line global-require
    require('./server');
  });

  it('Prod test', async () => {
    server(ENV_PRODUCTION);
  });
});
