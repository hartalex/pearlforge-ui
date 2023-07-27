import { SET_TOKEN } from '../actionTypes';

export default function setToken(token) {
  return {
    type: SET_TOKEN,
    token,
  };
}
