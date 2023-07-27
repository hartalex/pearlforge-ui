import { ACTION_SET_ERROR_BANNER, ACTION_DEFAULT } from '../actionTypes';

export default function setErrorBanner(state = {}, action = ACTION_DEFAULT) {
  switch (action.type) {
    case ACTION_SET_ERROR_BANNER:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
}
