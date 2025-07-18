import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import { ThemeProvider } from './context/ThemeContext';
import { ActiveSubSectionProvider } from './context/ActiveSubSectionContext';
import './styles/global.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <ActiveSubSectionProvider>
          <App />
        </ActiveSubSectionProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
