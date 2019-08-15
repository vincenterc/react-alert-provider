import React from 'react'
import styled from 'styled-components'

import { alert } from '../components/alert-provider'

export default () => (
  <Wrapper>
    <Button
      onClick={() => {
        alert(
          'Cancel the process?',
          'You would need to start again if you cancel, continue?',
          [
            {
              text: 'No',
            },
            {
              text: 'Yes, Cancel',
              onClick: () => {
                window.alert('cancelled')
              },
            },
          ]
        )
      }}
    >
      Alert
    </Button>
  </Wrapper>
)

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Button = styled.button`
  width: 100px;
  border: 1px solid black;
  border-radius: 3px;
  padding: 6px 0px;
  background: white;
  font-size: 18px;
  cursor: pointer;
`
