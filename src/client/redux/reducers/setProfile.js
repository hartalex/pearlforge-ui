import { SET_PROFILE } from '../actionTypes'
export default function setProfile (state = {}, action) {
  switch (action.type) {
    case SET_PROFILE:
      return Object.assign({}, state, {
        profile: action.profile
      })
    default:
      return state
  }
}
