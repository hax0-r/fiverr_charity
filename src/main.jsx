import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routers/Router.jsx'
import { ContextProvider } from './Context/Context.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </>
)
