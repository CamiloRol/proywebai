import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App.jsx'
import React from 'react'
import { AuthProvider } from './components/Authcontext.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <AuthProvider>
        <BrowserRouter>
        <App />
        </BrowserRouter>
      </AuthProvider>
    </React.StrictMode>
)
