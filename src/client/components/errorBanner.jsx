import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import setErrorBannerAction from '../redux/actions/setErrorBanner';

const ErrorBanner = ({ error, setErrorBanner, seconds = 10 }) => {
  let retval = <div />;
  if (error) {
    retval = <div>{error}</div>;
    setTimeout(() => {
      setErrorBanner();
    }, seconds * 1000);
  }
  return retval;
};

const mapStateToProps = (state) => ({
  error: state.error.error,
});

const mapDispatchToProps = (dispatch) => ({
  setErrorBanner: (error) => {
    dispatch(setErrorBannerAction(error));
  },
});

ErrorBanner.propTypes = {
  error: PropTypes.string,
  setErrorBanner: PropTypes.func.isRequired,
  seconds: PropTypes.number,
};

ErrorBanner.defaultProps = {
  error: '',
  seconds: 10,
};

export default connect(mapStateToProps, mapDispatchToProps)(ErrorBanner);
