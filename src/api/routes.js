import me from './getMe'
export default function routes (app) {
  app.get('/me', me)
}
