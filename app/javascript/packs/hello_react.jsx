import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import chatApp from './reducers'
import App from './components/App'
import { run } from './actions'

const store = createStore(
  chatApp,
  applyMiddleware(thunk)
);


store.dispatch(run());

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root'),
  )
})

