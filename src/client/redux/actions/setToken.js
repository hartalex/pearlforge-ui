import { SET_TOKEN } from '~/redux/actionTypes'

export default function setToken (token) {
  return {
    type: SET_TOKEN,
    token
  }
}
