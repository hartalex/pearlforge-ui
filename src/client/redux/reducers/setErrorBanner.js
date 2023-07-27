import { SET_ERROR_BANNER } from '../actionTypes';

export default function setErrorBanner(state = {}, action) {
  switch (action.type) {
    case SET_ERROR_BANNER:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
}
