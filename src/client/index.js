import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from '~/redux/reducers'

import Title from '~/components/title'
import SearchBar from '~/components/searchBar'
import ErrorBoundary from '~/components/errorBoundary'
import ErrorBanner from '~/components/errorBanner'
import Auth from '~/components/auth'
import Profile from '~/components/profile'

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const root = () => {
  return (
    <div>
      <Provider store={store}>
        <ErrorBoundary>
          <ErrorBanner />
          <Profile />
          <Auth />
          <Title text="Title" />
          <SearchBar text="text" />
        </ErrorBoundary>
      </Provider>
    </div>
  )
}
render(root(), document.getElementById('root'))
