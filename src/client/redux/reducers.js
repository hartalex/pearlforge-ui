import { combineReducers } from 'redux'
import setToken from '~/redux/reducers/setToken'
import setProfile from '~/redux/reducers/setProfile'
import setErrorBanner from '~/redux/reducers/setErrorBanner'

export default combineReducers({ auth: setToken, id: setProfile, error: setErrorBanner })
