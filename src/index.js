import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './constant/store';
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { productsApi } from './components/apiSlice';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ApiProvider api={productsApi}>
    <App />
      </ApiProvider>
    </Provider>
  </React.StrictMode>
);

