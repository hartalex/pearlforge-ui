import { SET_PROFILE } from '~/redux/actionTypes'
export default function setProfile (state = { loggedIn: false }, action) {
  switch (action.type) {
    case SET_PROFILE:
      return Object.assign({}, state, {
        profile: action.profile,
        loggedIn: typeof action.profile !== 'undefined'
      })
    default:
      return state
  }
}
