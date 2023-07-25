import auth from '@/auth';
import health from '@/health';
import {verifyAuthMiddleWare} from '@/verifyAuth';
import express from 'express';
import {ROUTES_AUTH, ROUTES_HEALTH} = '../constants'


const authenticatedRoutesConfig = {
  middleware:[verifyAuthMiddleWare],
  routes:[{route: ROUTES_AUTH, function: auth}]
};

const unauthenticatedRoutesConfig = {
  middleware:[],
  routes:[{route: ROUTES_HEALTH, function: health}]
};

export const authenticatedRoutes = function() {
  return createRoutingFromConfig(authenticatedRoutesConfig)
};

export const unauthenticatedRoutes = function() {
  return createRoutingFromConfig(unauthenticatedRoutesConfig)
};

const createRoutingFromConfig = function(config) {
  const router = express.Router();
  config?.middleware?.forEach(middleware => {
    router.use(middleware);
  });
  config?.routes?.forEach(route => {
    router.get(route.route, route.function);
  });
  return router;
}
