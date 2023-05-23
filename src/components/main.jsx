import React from 'react'
import ReactDOM from 'react-dom/client'
import '../style/index.css'
import App from './App.jsx'
import Header from './header.jsx'
import { Provider } from 'react-redux'
import store from '../store/store.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Header/>
      <App />
    </Provider>
  </React.StrictMode>,
)