import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MusicProvider } from './components/MusicProvider.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MusicProvider>
      <App />
    </MusicProvider>
  </StrictMode>,
)
