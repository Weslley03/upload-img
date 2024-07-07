import React from 'react'
import ReactDOM from 'react-dom/client'
import { GlobalStyled } from './GlobalStyled.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '../src/pages/Home/Home.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element:  <Home /> 
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyled />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
