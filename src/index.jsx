import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import configureStore from './store/configureStore'
import App from './components/App'
import './styles/app.scss'
import 'materialize-loader'


const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
)

if(module.hot) // eslint-disable-line no-undef
  module.hot.accept() // eslint-disable-line no-undef
