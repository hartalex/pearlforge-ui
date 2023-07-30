import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ErrorContext } from '../context/ErrorContext';

const ErrorBanner = ({ seconds = 10 }) => {
  const { error, setError } = useContext(ErrorContext);
  let retval = <div />;
  if (error) {
    retval = <div>{error}</div>;
    setTimeout(() => {
      setError();
    }, seconds * 1000);
  }
  return retval;
};

ErrorBanner.propTypes = {
  seconds: PropTypes.number,
};

ErrorBanner.defaultProps = {
  seconds: 10,
};

export default ErrorBanner;
