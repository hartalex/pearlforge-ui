import React from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { connect } from 'react-redux';
import setTokenAction from '../redux/actions/setToken';
import setProfileAction from '../redux/actions/setProfile';
import setErrorBannerAction from '../redux/actions/setErrorBanner';

const Auth = ({ loggedIn, setToken, setProfile, setErrorBanner }) => {
  const loginFail = (response) => {
    setToken();
    switch (response.error) {
      case 'immediate_failed':
        console.error('Immediate Failed');
        setErrorBanner('Unauthorized');
        break;
      case 'access_denied':
        console.error('Immediate Failed');
        setErrorBanner('Access Denied');
        break;
      case 'popup_closed_by_user':
        console.error('Popup close by user');
        setErrorBanner('Popup Closed Before Authentication');
        break;
      default:
        console.error(response.error);
        setErrorBanner('Login Error');
        break;
    }
  };
  const loginSuccess = async (response) => {
    setToken(response.tokenId);
    try {
      const res = await fetch('/api/auth', {
        headers: {
          Authorization: `Bearer ${response.tokenId}`,
        },
        timeout: 1000,
      });
      switch (res.status) {
        case 200:
          const body = await res.json();
          if (body.ok) {
            setProfile(body.profile);
          }
          break;
        case 401:
          console.error('Unauthorized');
          setErrorBanner('Unauthorized');
          setToken();
          break;
        default:
          console.error('API Error');
          setErrorBanner('API Error');
          setToken();
          break;
      }
    } catch (error) {
      console.error(error);
      setErrorBanner('API Error');
      setToken();
    }
  };
  const logoutSuccess = (response) => {
    // clear the token
    setToken(undefined);
    setProfile(undefined);
  };
  let retval = (
    <GoogleLogin
      clientId="466133376395-a2gr81ake50q1nhodotjbiprelvr51u6.apps.googleusercontent.com"
      buttonText="Login"
      onSuccess={loginSuccess}
      onFailure={loginFail}
      isSignedIn="true"
    />
  );
  if (loggedIn) {
    retval = (
      <div>
        <GoogleLogout buttonText="Logout" onLogoutSuccess={logoutSuccess} />
      </div>
    );
  }
  return retval;
};

const mapStateToProps = (state) => {
  return {
    loggedIn: state.id.loggedIn,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setToken: (token) => {
      dispatch(setTokenAction(token));
    },
    setProfile: (profile) => {
      dispatch(setProfileAction(profile));
    },
    setErrorBanner: (error) => {
      dispatch(setErrorBannerAction(error));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
