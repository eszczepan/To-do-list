import React from 'react';
import { Provider } from 'react-redux';
import store from 'store';
import MainTemplate from 'templates/MainTemplate';
import MainPage from 'pages/MainPage';

const Root = () => (
  <Provider store={store}>
    <MainTemplate>
      <>
        <MainPage />
      </>
    </MainTemplate>
  </Provider>
);

export default Root;
