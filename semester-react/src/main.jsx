import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.jsx'

import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/bootstrap-fix.css'
import './assets/css/line-awesome.min.css'
import './assets/iconoir-icons/iconoir@main/css/iconoir.css'
import './assets/css/style.css'
import './assets/css/responsive.css'
import './assets/css/modern.css'
import './assets/css/page-overrides.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>,
)
