import { SET_PROFILE } from '../actionTypes'

export default function setProfile (profile) {
  return {
    type: SET_PROFILE,
    profile,
    loggedIn: typeof profile !== 'undefined'
  }
}
