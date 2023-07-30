import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';

export const AuthContext = React.createContext({});

const AuthContextProvider = ({ children }) => {
  const [profile, setProfile] = useState();
  const [token, setToken] = useState();
  const value = useMemo({ profile, setProfile, token, setToken });
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

AuthContextProvider.propTypes = {
  children: PropTypes.element,
};

AuthContextProvider.defaultProps = {
  children: <div />,
};

export default AuthContextProvider;
