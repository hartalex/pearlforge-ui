import { ACTION_SET_PROFILE } from '../actionTypes';

export default function setProfile(profile) {
  return {
    type: ACTION_SET_PROFILE,
    profile,
  };
}
