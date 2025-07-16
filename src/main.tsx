import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx'
import './index.css'
import './styles/global.scss'
import { ThemeProvider } from './context/ThemeContext.tsx'
import { ActiveSubSectionProvider } from './context/ActiveSubSectionContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <ActiveSubSectionProvider>
          <App />
        </ActiveSubSectionProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
