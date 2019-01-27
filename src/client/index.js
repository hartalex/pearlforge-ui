import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './redux/reducers'

import Title from './title'
import SearchBar from './searchBar'
import ErrorBoundary from './errorBoundary'
import Auth from './auth'

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const root = () => {
  return (
    <div>
      <Provider store={store}>
        <ErrorBoundary>
          <Auth />
          <Title text="Title" />
          <SearchBar text="text" />
        </ErrorBoundary>
      </Provider>
    </div>
  )
}
render(root(), document.getElementById('root'))
