import React from 'react'
import styled from 'styled-components'

const Alert = ({
  title = 'Title',
  message = 'Message',
  confirmTitle = 'Confirm',
  onConfirm = () => {},
  cancelTitle = 'Cancel',
  onCancel = () => {},
}) => (
  <Backdrop>
    <Wrapper>
      <Title>{title}</Title>
      <Message>{message}</Message>
      <ButtonBlock>
        <Button extraCss="margin-right: 6px;" onClick={onCancel}>
          {cancelTitle}
        </Button>
        <Button extraCss="background: black; color: white;" onClick={onConfirm}>
          {confirmTitle}
        </Button>
      </ButtonBlock>
    </Wrapper>
  </Backdrop>
)

const Backdrop = styled.div`
  position: fixed;
  top: 0px;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.7);
`

const Wrapper = styled.div`
  width: 340px;
  border-radius: 3px;
  padding: 20px 20px 10px;
  background: white;
  font-size: 14px;
`

const Title = styled.div`
  margin-bottom: 15px;
  font-weight: bold;
`

const Message = styled.div`
  margin-bottom: 30px;
`

const ButtonBlock = styled.div`
  display: flex;
  justify-content: flex-end;
`

const Button = styled.button`
  width: 100px;
  border: 1px solid black;
  border-radius: 3px;
  padding: 6px 0;
  background-color: white;
  cursor: pointer;
  ${props => props.extraCss}
`

export default Alert
