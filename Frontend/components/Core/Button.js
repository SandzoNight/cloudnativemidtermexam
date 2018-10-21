import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import colors from '../../config/colors'
import { normal } from '../../config/fontSize'

const Button = styled.button`
  border: 2px solid ${colors.mainOrange};
  border-radius: 5px;
  padding: .2em 1.4em;
  transition: .5s;
  font-size: ${normal};
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  ${props => props.fluid && 'width: 100%;'}
  ${props => props.gradient && `
    background: linear-gradient(90deg, #EF4B23 -1.58%, #F58120 100%);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border: none
    height:36px;`}
`

const ButtonPrimary = styled(Button)`
  color: #FFFFFF;
  background-color: ${colors.mainOrange};
`

const ButtonOutline = styled(Button)`
  background-color: #FFFFFF;
  color: ${colors.mainOrange};
  &:hover {
    color: #FFFFFF;
    background-color: ${colors.mainOrange};
  }
`
const ButtonContainer = styled.div`
  background-color: #fff;
  padding: 0.5em;
  width: 100%;
  bottom: 0;
  border-radius: 0 0 5px 5px;
`

const FixedContainer = styled(ButtonContainer)`
  position: fixed;
`

const AbsoluteContainer = styled(ButtonContainer)`
  position: absolute;
`

const ButtonOutlineFixed = ({ name = 'JOIN', handleClick }) => (
  <FixedContainer>
    <ButtonOutline onClick={handleClick} fluid>{name}</ButtonOutline>
  </FixedContainer>
)

const ButtonOutlineAbsolute = ({ name = 'JOIN', handleClick }) => (
  <AbsoluteContainer>
    <ButtonOutline onClick={handleClick} fluid>{name}</ButtonOutline>
  </AbsoluteContainer>
)

ButtonOutlineFixed.propTypes = {
  name: PropTypes.string,
  handleClick: PropTypes.func,
}

export default Button

export {
  ButtonPrimary,
  ButtonOutline,
  ButtonOutlineFixed,
  ButtonOutlineAbsolute
}
