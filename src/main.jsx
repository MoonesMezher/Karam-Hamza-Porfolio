// Dev 
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// CSS
import "./assets/css/animation.css"
import "./assets/css/english.css"
import "./assets/css/root.css"
import "./assets/css/style.css"
import './index.css'
import "./assets/css/media.css"
// App
import App from './App.jsx'
// Router Dom
import { BrowserRouter } from 'react-router-dom'

// Render
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
