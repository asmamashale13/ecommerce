
import { createRoot } from 'react-dom/client'
import ContextProvider from './Features/ContextProvider.jsx'
import App from './App.jsx'
import './index.css'
createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <App />
    </ContextProvider>
)
