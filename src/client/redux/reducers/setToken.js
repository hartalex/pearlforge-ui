import { SET_TOKEN } from '~/redux/actionTypes'
export default function setToken (state = {}, action) {
  switch (action.type) {
    case SET_TOKEN:
      return Object.assign({}, state, {
        token: action.token
      })
    default:
      return state
  }
}
