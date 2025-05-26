import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import theme from './style/theme.jsx'
import { ThemeProvider } from '@emotion/react'
import "@fontsource/roboto";
import "@fontsource/roboto/300.css";  
import "@fontsource/roboto/500.css"; 
import "@fontsource/roboto/600.css"; 


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
  </React.StrictMode>,
)
