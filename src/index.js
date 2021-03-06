import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from '@store/store';
import ThemeProvider from '@context/ThemeProvider'
import '@styles/index.css';
import App from '@pages/App';
import {  BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <ThemeProvider>
    <App />
    </ThemeProvider>
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

