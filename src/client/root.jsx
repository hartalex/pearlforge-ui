import React from 'react';
import ErrorContextProvider from './context/ErrorContext';
import AuthContextProvider from './context/AuthContext';

import Title from './components/title';
import SearchBar from './components/searchBar';
import ErrorBoundary from './components/errorBoundary';
import ErrorBanner from './components/errorBanner';
import Auth from './components/auth';
import Profile from './components/profile';

const root = () => (
  <div>
    <ErrorContextProvider>
      <ErrorBoundary>
        <ErrorBanner />
        <AuthContextProvider>
          <Profile />
          <Auth />
          <Title text="Title" />
          <SearchBar text="text" />
        </AuthContextProvider>
      </ErrorBoundary>
    </ErrorContextProvider>
  </div>
);

export default root;
