import me from '@/me'
import hello from '@/hello'
import { verifyAuthMiddleWare } from '@/verifyAuth'
import express from 'express'

export const authenticatedRoutes = function () {
  const router = express.Router()
  router.use(verifyAuthMiddleWare)
  router.get('/me', me)
  return router
}

export const unauthenticatedRoutes = function () {
  const router = express.Router()
  router.get('/hello', hello)
  return router
}
