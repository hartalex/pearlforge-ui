import React from 'react';
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

const mapStateToProps = (state) => {
  return {
    error: state.error.error,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setErrorBanner: (error) => {
      dispatch(setErrorBannerAction(error));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ErrorBanner);
