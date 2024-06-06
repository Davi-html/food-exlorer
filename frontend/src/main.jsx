import React from 'react'
import ReactDOM from 'react-dom/client'
import { GlobalStyle } from './GlobalStyle'
import { Signin } from './pages/Signin/'
import { ThemeProvider } from 'styled-components'
import { theme } from './Theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle/>
    <ThemeProvider theme={theme}/>
    <Signin />
  </React.StrictMode>,
)
