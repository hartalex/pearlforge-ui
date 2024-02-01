import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';

export const ErrorContext = React.createContext({});

const ErrorContextProvider = ({ children }) => {
  const [error, setError] = useState();
  const value = useMemo(() => ({ error, setError }), []);
  return (
    <ErrorContext.Provider value={value}>{children}</ErrorContext.Provider>
  );
};

ErrorContextProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

ErrorContextProvider.defaultProps = {
  children: <div />,
};

export default ErrorContextProvider;
