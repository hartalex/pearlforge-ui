import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './redux/reducers';

import Title from './components/title.jsx';
import SearchBar from './components/searchBar.jsx';
import ErrorBoundary from './components/errorBoundary.jsx';
import ErrorBanner from './components/errorBanner.jsx';
import Auth from './components/auth.jsx';
import Profile from './components/profile.jsx';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

const root = () => (
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
);

export default root;
