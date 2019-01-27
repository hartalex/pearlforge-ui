import React from 'react'
import { GoogleLogin, GoogleLogout } from 'react-google-login'
import { connect } from 'react-redux'
import setTokenAction from './redux/actions/setToken'
import setProfileAction from './redux/actions/setProfile'

const responseGoogle = (response) => {
  console.log(response)
}
const Auth = ({ profile, setToken, setProfile }) => {
  const loginSuccess = (response) => {
    setToken(response.tokenId)
    fetch('/me', {
      headers: {
        Authorization: `Bearer ${response.tokenId}`
      }
    })
      .then((res) => res.json())
      .then((val) => {
        console.log(val)
        if (val.ok) {
          setProfile(val.profile)
        }
      })
      .catch((error) => console.error('Error:', error))
  }
  const logoutSuccess = (response) => {
    // clear the token
    setToken(undefined)
    setProfile(undefined)
  }
  let retval = (
    <GoogleLogin
      clientId="466133376395-a2gr81ake50q1nhodotjbiprelvr51u6.apps.googleusercontent.com"
      buttonText="Login"
      onSuccess={loginSuccess}
      onFailure={responseGoogle}
      isSignedIn="true"
    />
  )
  if (profile) {
    retval = (
      <div>
        <img src={profile.picture} />
        {profile.given_name} {profile.family_name}
        <GoogleLogout buttonText="Logout" onLogoutSuccess={logoutSuccess} />
      </div>
    )
  }
  return retval
}

const mapStateToProps = (state) => {
  return {
    profile: state.id.profile
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    setToken: (token) => {
      dispatch(setTokenAction(token))
    },
    setProfile: (profile) => {
      dispatch(setProfileAction(profile))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth)
