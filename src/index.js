import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import { AuthContextProvider } from './store/auth-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <SnackbarProvider autoHideDuration={3000} maxSnack={5}>
        <AuthContextProvider>
                  <App />
        </AuthContextProvider>
      </SnackbarProvider>
    </BrowserRouter>
  </React.StrictMode>
);


