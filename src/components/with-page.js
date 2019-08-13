import React from 'react'
import Layout from './layout'

const withPage = Comp => {
  const WithPage = props => (
    <Layout {...props}>
      <Comp {...props} />
    </Layout>
  )

  WithPage.displayName = `WithPage(${Comp.displayName ||
    Comp.name ||
    'Component'})`

  return WithPage
}

export default withPage
