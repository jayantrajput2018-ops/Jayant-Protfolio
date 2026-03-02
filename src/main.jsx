import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// 1. Find the "root" div in your HTML
const rootElement = document.getElementById('root');

// 2. Tell React to take control of that div
const root = ReactDOM.createRoot(rootElement);

// 3. Render your app inside it
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
