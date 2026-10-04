import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

// HashRouter is used (not BrowserRouter) so routing works reliably on
// GitHub Pages, which doesn't support server-side rewrites for SPAs.
// URLs will look like yoursite.github.io/#/services — this is expected.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
)
