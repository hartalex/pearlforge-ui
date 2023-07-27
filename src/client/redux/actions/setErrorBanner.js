import { ACTION_SET_ERROR_BANNER } from '../actionTypes';

export default function setErrorBanner(error) {
  return {
    type: ACTION_SET_ERROR_BANNER,
    error,
  };
}
