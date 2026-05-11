import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

if (typeof window !== 'undefined') {
  // Prevent browser extensions (like MetaMask/Brave) from crashing the app when they conflict
  const ignoreErrors = ['redefine property: ethereum', 'ethereum'];
  
  const originalError = window.onerror;
  window.onerror = function(message, source, lineno, colno, error) {
    const msg = String(message).toLowerCase();
    if (ignoreErrors.some(err => msg.includes(err))) {
      return true; // Suppress error
    }
    return originalError ? originalError(message, source, lineno, colno, error) : false;
  };

  window.addEventListener('unhandledrejection', (event) => {
    const msg = String(event.reason?.message || event.reason).toLowerCase();
    if (ignoreErrors.some(err => msg.includes(err))) {
      event.preventDefault();
      event.stopPropagation();
    }
  });

  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual';
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
