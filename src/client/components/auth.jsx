import React, { useContext } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { ErrorContext } from '../context/ErrorContext';
import { AuthContext } from '../context/AuthContext';

const Auth = () => {
  const { setError } = useContext(ErrorContext);
  const { profile, setProfile, setToken } = useContext(AuthContext);

  const loginFail = (response) => {
    setToken();
    switch (response.error) {
      case 'immediate_failed':
        console.error('Immediate Failed');
        setError('Unauthorized');
        break;
      case 'access_denied':
        console.error('Immediate Failed');
        setError('Access Denied');
        break;
      case 'popup_closed_by_user':
        console.error('Popup close by user');
        setError('Popup Closed Before Authentication');
        break;
      default:
        console.error(response.error);
        setError('Login Error');
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
          setError('Unauthorized');
          setToken();
          break;
        default:
          console.error('API Error');
          setError('API Error');
          setToken();
          break;
      }
    } catch (error) {
      console.error(error);
      setError('API Error');
      setToken();
    }
  };

  const logoutSuccess = () => {
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
  if (typeof profile !== 'undefined') {
    retval = (
      <div>
        <GoogleLogout buttonText="Logout" onLogoutSuccess={logoutSuccess} />
      </div>
    );
  }
  return retval;
};

Auth.propTypes = {};

Auth.defaultProps = {};

export default Auth;
