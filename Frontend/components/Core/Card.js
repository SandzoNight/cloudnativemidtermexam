import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import color from '../../config/colors'

const Link = styled.a`
  text-decoration: none;
  color: ${color.mainFont};
  :hover{
    text-decoration: none;
  }
`

const CardContainer = styled.div`
  border:  0.5px solid #E4E4E4;
  border-radius: 5px;
  margin-bottom: 30px;
  :hover {
  color: ${color.mainOrange};
  }
  box-shadow: 4px 4px 4px rgba(196, 196, 196, 0.15);
`

const CoverImage = styled.div`
  border-radius: 5px 5px 0px 0px;
  max-height: 164px;
  min-height: 164px;
  background-image: ${props => `url('${props.src || ''}')`};
  background-size: auto 100%;
  background-repeat: no-repeat;
  background-position: center top;
  background-color: #E1E6EA;
`

const DetailContainer = styled.div`
  display : flex;
  max-height: 70px;
  min-height: 70px;
  flex-direction: row;
`
export default class Card extends Component {
  static propTypes = {
    slug: PropTypes.string,
    coverImage: PropTypes.string,
  }
  static defaultProps = {
    slug: '#',
    coverImage: '/static/img/dummy-image.jpg',
  }
  render () {
    const { children, slug, coverImage } = this.props
    return (
      <CardContainer>
        <Link href={slug}>
          <CoverImage src={coverImage} alt='Card image cap' />
          <DetailContainer>
            {children}
          </DetailContainer>
        </Link>
      </CardContainer>
    )
  }
}
