import React from 'react'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'

// import favicon from '../../assets/img/favicon.ico'
import './layout.css'

const Layout = ({ children }) => (
  <Wrapper>
    <Helmet>
      <title>React Alert Provider Hook</title>
      <meta name="description" content="React Alert Provider Hook" />
      {/* <link rel="icon" href={favicon} /> */}
    </Helmet>
    {children}
  </Wrapper>
)

const Wrapper = styled.div``

export default Layout
