import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import chatApp from './reducers'
import App from './components/App'
import { assignUser } from './actions'

let store = createStore(chatApp)
store.dispatch(assignUser());

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root'),
  )
})

