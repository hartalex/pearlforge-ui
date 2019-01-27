import { combineReducers } from 'redux'
import setToken from './reducers/setToken'
export default combineReducers({ auth: setToken })
