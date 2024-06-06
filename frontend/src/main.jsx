import React from 'react'
import ReactDOM from 'react-dom/client'

import { GlobalStyle } from './GlobalStyle'
import { ThemeProvider } from 'styled-components'
import { theme } from './Theme'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { Signup } from './pages/Signup'
import { Signin } from './pages/Signin/'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Signin/>,
  },
  {
    path: "/signup",
    element: <Signup/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle/>
    <ThemeProvider theme={theme}/>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
