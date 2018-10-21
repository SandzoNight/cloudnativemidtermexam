import styled from 'styled-components'

import colors from '../../config/colors'
import { large, medium, normal } from '../../config/fontSize'

const primaryText = props => props.primary && `color: ${colors.mainOrange};`

const Header = styled.h1`
  font-size: ${large};
  color: ${colors.mainOrange};
`

const SubTitle = styled.h2`
  font-size: ${medium};
  ${primaryText}
  `

const LightText = styled.Label`
  width: 100%;
  word-wrap: break-word;
  ${primaryText}
`

const NormalText = styled(LightText)`
  font-size: ${normal};
`

const Label = styled(LightText)`
  font-size: ${medium};
`

const Paragraph = styled.p`
  font-size: ${normal};
  font-weight: lighter;
`

export {
  Header,
  SubTitle,
  NormalText,
  Paragraph,
  Label
}
