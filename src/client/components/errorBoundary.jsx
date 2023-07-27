import React from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
    this.children = props.children;
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
    console.error(error);
    console.log(info);
  }

  render() {
    const { hasError, error } = this.state;
    if (hasError) {
      // You can render any custom fallback UI
      return (
        <div>
          <h1>Something went wrong.</h1>
          <h3>{error.message}</h3>
        </div>
      );
    }

    return this.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.element,
};

ErrorBoundary.defaultProps = {
  children: <div />,
};

export default ErrorBoundary;
