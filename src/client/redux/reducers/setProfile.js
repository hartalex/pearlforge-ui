import { ACTION_SET_PROFILE, ACTION_DEFAULT } from '../actionTypes';

export default function setProfile(
  state = { loggedIn: false },
  action = ACTION_DEFAULT,
) {
  switch (action.type) {
    case ACTION_SET_PROFILE:
      return {
        ...state,
        profile: action.profile,
        loggedIn: typeof action.profile !== 'undefined',
      };
    default:
      return state;
  }
}
