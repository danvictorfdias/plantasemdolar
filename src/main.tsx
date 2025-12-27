import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

setTimeout(() => {
  import('./lib/serviceWorkerRegistration').then(({ registerServiceWorker }) => {
    try {
      registerServiceWorker();
    } catch (error) {
      // Service Worker is optional
    }
  }).catch(() => {
    // Service Worker is optional
  });
}, 3000);
