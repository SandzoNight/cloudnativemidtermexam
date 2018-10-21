import styled, { keyframes } from 'styled-components'
import Icon from './Icon'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const LoadingIcon = styled(Icon)`
  animation: ${rotate360} 1s cubic-bezier(0.75, 0.32, 0.19, 0.88) infinite;
`

const Container = styled.div`
  ${props => props.innerspacey && `padding-top: ${props.innerspacey}px; padding-bottom: ${props.innerspacey}px`};
`

const Loading = props => (
  <Container innerspacey={props.innerspacey}>
    <LoadingIcon icon={faCircleNotch} {...props} />
  </Container>
)

export default Loading
