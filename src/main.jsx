import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import './Style/global.css'
import './Style/theme.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
