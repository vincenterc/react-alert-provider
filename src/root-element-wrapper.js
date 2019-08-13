import React from 'react'
import { Provider } from 'react-redux'

import AlertProvider from './components/alert-provider'

import store from './store'

export default ({ element }) => (
  <Provider store={store}>
    <AlertProvider>{element}</AlertProvider>
  </Provider>
)
