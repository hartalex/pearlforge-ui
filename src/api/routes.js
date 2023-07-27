import express from 'express';
import auth from '@/auth';
import health from '@/health';
import verifyAuthMiddleWare from '@/verifyAuth';
import {
  ROUTES_AUTH,
  ROUTES_HEALTH,
} from '../constants';

const authenticatedRoutesConfig = {
  middleware: [verifyAuthMiddleWare],
  routes: [{ route: ROUTES_AUTH, function: auth }],
};

const unauthenticatedRoutesConfig = {
  routes: [{ route: ROUTES_HEALTH, function: health }],
};

const createRoutingFromConfig = (config) => {
  const router = express.Router();
  config?.middleware?.forEach((middleware) => {
    if (middleware) {
      router.use(middleware);
    }
  });
  config?.routes?.forEach((route) => {
    if (route) {
      router.get(route.route, route.function);
    }
  });
  return router;
};

export const authenticatedRoutes = () => (createRoutingFromConfig(authenticatedRoutesConfig));

export const unauthenticatedRoutes = () => (createRoutingFromConfig(unauthenticatedRoutesConfig));
