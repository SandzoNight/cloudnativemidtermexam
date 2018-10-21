import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { normal } from '../../config/fontSize'

const MessageBox = styled.div`
  margin: 3em 1em;
  padding: 1.5em 3em;
  width: 100%;
  min-height: 300px;

  background-color: #fff;
  color: #C4C4C4;

  text-align: center;
  font-size: ${normal};

  img {
    max-width: 64px;
    margin: 1em;
  }
`

const Message = ({ message = 'ไม่มีข้อมูล', image = '/static/img/sad.png' }) => (
  <MessageBox>
    <img src={image} />
    <br />
    {message}
  </MessageBox>
)

Message.propTypes = {
  message: PropTypes.string,
  image: PropTypes.string,
}

export default Message
