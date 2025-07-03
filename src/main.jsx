import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { UserApp } from './UserApp';
import { BrowserRouter } from 'react-router-dom';
import { LoginProvider } from './context/LoginProvider';
import './style.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <LoginProvider>
        <UserApp />
      </LoginProvider>
    </BrowserRouter>
  </StrictMode>
);
