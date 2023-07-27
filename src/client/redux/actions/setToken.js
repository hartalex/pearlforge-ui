import { ACTION_SET_TOKEN } from '../actionTypes';

export default function setToken(token) {
  return {
    type: ACTION_SET_TOKEN,
    token,
  };
}
