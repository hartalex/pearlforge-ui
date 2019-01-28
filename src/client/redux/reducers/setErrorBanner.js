import { SET_ERROR_BANNER } from '~/redux/actionTypes'
export default function setErrorBanner (state = {}, action) {
  switch (action.type) {
    case SET_ERROR_BANNER:
      return Object.assign({}, state, {
        error: action.error
      })
    default:
      return state
  }
}
