import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'src/pages/App';

if (import.meta.env.DEV && !import.meta.env.VITE_WITHOUT_MSW) {
  const { startMockWorker } = await import('./mocks/browser');
  await startMockWorker();
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
