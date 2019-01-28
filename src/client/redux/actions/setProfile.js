import { SET_PROFILE } from '~/redux/actionTypes'

export default function setProfile (profile) {
  return {
    type: SET_PROFILE,
    profile
  }
}
