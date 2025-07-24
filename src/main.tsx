import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App.tsx';
import CampaignsProvider from './context/CampaignsProvider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <CampaignsProvider>
        <App />
      </CampaignsProvider>
    </BrowserRouter>
  </StrictMode>,
);
