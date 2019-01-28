import { SET_ERROR_BANNER } from '../actionTypes'

export default function setErrorBanner (error) {
  return {
    type: SET_ERROR_BANNER,
    error
  }
}
