import React from 'react'
import styled, { keyframes } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

import colors from '../../config/colors'

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const StyledIcon = styled(FontAwesomeIcon)`
  margin-right: 4px;
`

const LargeIconStyled = styled(StyledIcon)`
  font-size: 60px;
  margin: 10px 0;
  color: ${colors.mainOrange};
`

const RotateAnimateIcon = styled(LargeIconStyled)`
  animation: ${rotate360} 2s linear infinite;
`

class Icon extends React.Component {
  render () {
    return (
      <StyledIcon {...this.props} />
    )
  }
}

const LargeIcon = ({ ...props }) => (
  <LargeIconStyled {...props} />
)

const LoadingIcon = ({ ...props }) => (
  <RotateAnimateIcon {...props} icon={faSpinner} />
)

export default Icon

export {
  LargeIcon,
  LoadingIcon
}
