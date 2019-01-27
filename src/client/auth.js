import React from 'react'
import { GoogleLogin, GoogleLogout } from 'react-google-login'
import { connect } from 'react-redux'
import setTokenAction from './redux/actions/setToken'

const responseGoogle = (response) => {
  console.log(response)
}
const Auth = ({ token, setToken }) => {
  let retval = (
    <GoogleLogin
      clientId="466133376395-a2gr81ake50q1nhodotjbiprelvr51u6.apps.googleusercontent.com"
      buttonText="Login"
      onSuccess={setToken}
      onFailure={responseGoogle}
      isSignedIn="true"
    />
  )
  if (token) {
    retval = (
      <div>
        <img src={token.profileObj.imageUrl} />
        {token.profileObj.givenName} {token.profileObj.familyName}
        <GoogleLogout buttonText="Logout" onLogoutSuccess={setToken} />
      </div>
    )
  }
  return retval
}

const mapStateToProps = (state) => {
  return {
    token: state.auth.token
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    setToken: (token) => {
      dispatch(setTokenAction(token))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth)
