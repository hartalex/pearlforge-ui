import { SET_PROFILE } from '../actionTypes'
export default function setProfile (state = { loggedIn: false }, action) {
  switch (action.type) {
    case SET_PROFILE:
      return Object.assign({}, state, {
        profile: action.profile,
        loggedIn: action.loggedIn
      })
    default:
      return state
  }
}
