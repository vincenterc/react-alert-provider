import React from 'react'

import AlertProvider from './components/alert-provider'
import Layout from './components/layout'

export default ({ element, props }) => (
  <AlertProvider {...props}>
    <Layout {...props}>{element}</Layout>
  </AlertProvider>
)
