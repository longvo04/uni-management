import CssBaseline from '@mui/material/CssBaseline'
import { Provider } from 'react-redux';
import store from './redux/store';
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import theme from './theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CssVarsProvider theme={theme}>
      <CssBaseline />
        <Provider store={store}>
          <App sx={{ padding: 0, minWidth: '100%' }}/>
        </Provider>
    </CssVarsProvider>
  </React.StrictMode>
)
