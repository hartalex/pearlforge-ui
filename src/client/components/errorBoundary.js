import React from 'react'

class ErrorBoundary extends React.Component {
  constructor (props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError (error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error }
  }

  componentDidCatch (error, info) {
    // You can also log the error to an error reporting service
    console.error(error)
    console.log(info)
  }

  render () {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div>
          <h1>Something went wrong.</h1>
          <h3>{this.state.error.message}</h3>
        </div>
      )
    }

    return this.props.children
  }
}
export default ErrorBoundary
