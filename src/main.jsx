import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import theme from './theme.jsx'
import { ThemeProvider } from '@emotion/react'
import AppContext from './contextApi.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppContext>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </AppContext>
  </React.StrictMode>,
)
