import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import myRouter from './Layout/Layout'
import AuthProvider from './Provider/AuthProvider'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={myRouter}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
