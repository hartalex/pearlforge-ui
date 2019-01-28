import { combineReducers } from 'redux'
import setToken from './reducers/setToken'
import setProfile from './reducers/setProfile'
import setErrorBanner from './reducers/setErrorBanner'

export default combineReducers({ auth: setToken, id: setProfile, error: setErrorBanner })
