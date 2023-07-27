import { ACTION_SET_TOKEN, ACTION_DEFAULT } from '../actionTypes';

export default function setToken(state = {}, action = ACTION_DEFAULT) {
  switch (action.type) {
    case ACTION_SET_TOKEN:
      return {
        ...state,
        token: action.token,
      };
    default:
      return state;
  }
}
