import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/style.css';
import { Provider } from 'react-redux';
import { store } from '@/store/index';
import { AppRoutes } from './route';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)