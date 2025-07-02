import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { UserApp } from './UserApp';
import './style.css';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <UserApp />
    </BrowserRouter>
  </StrictMode>
);
