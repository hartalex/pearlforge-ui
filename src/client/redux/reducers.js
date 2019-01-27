import { combineReducers } from 'redux'
import setToken from './reducers/setToken'
import setProfile from './reducers/setProfile'

export default combineReducers({ auth: setToken, id: setProfile })
