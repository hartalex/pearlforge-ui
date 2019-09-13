import auth from '@/auth';
import health from '@/health';
import stat from '@/stat';
import {verifyAuthMiddleWare} from '@/verifyAuth';
import express from 'express';

export const authenticatedRoutes = function() {
  const router = express.Router();
  router.use(verifyAuthMiddleWare);
  router.get('/auth', auth);
  return router;
};

export const unauthenticatedRoutes = function() {
  const router = express.Router();
  router.get('/health', health);
  return router;
};
