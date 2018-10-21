import React from 'react'
import styled from 'styled-components'
import { Container } from 'reactstrap'
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons'

import { SubTitle, NormalText } from './Text'
import { LargeIcon, LoadingIcon } from './Icon'

const flexCenter = `
  display: flex;
  justify-content: center;
  align-items: center;
`

const AlertDimmer = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  visibility: ${props => `${props.isDisplay ? 'visible' : 'hidden'}`};
  opacity: ${props => `${props.isDisplay ? '1' : '0'}`};
  transition: opacity .2s,visibility .2s;
  background-color: rgba(51, 51, 51, 0.60);
  ${flexCenter}
`

const AlertContainer = styled.div`
  background: #FFFFFF;
  border-radius: 5px;
  min-height: 150px;
  width: 100%;
  margin: 0 37px;
  padding: 1em 0;
  text-align: center;
  ${flexCenter}
`

const Alert = ({ isDisplay, children }) => (
  <AlertDimmer isDisplay={isDisplay}>
    <AlertContainer >
      <Container className='d-flex flex-column align-items-center'>
        {children}
      </Container>
    </AlertContainer>
  </AlertDimmer>
)

const AlertIcon = ({ isDisplay, message, description, icon = faCheckCircle, messages = [] }) => (
  <Alert isDisplay={isDisplay}>
    <LargeIcon icon={icon} />
    { message && <SubTitle primary>{message}</SubTitle> }
    { description && <NormalText primary>{description}</NormalText> }
    {
      messages.length > 0 && messages.map(text => (
        <NormalText key={text} primary>{text}</NormalText>
      ))
    }
  </Alert>
)

const Loading = ({ isDisplay, message = 'Loading...' }) => (
  <Alert isDisplay={isDisplay}>
    <LoadingIcon />
    <SubTitle primary>{message}</SubTitle>
  </Alert>
)

export default Alert

export {
  AlertIcon,
  Loading
}
