import React from 'react'
import styled from 'styled-components'
import DefaultQrCode from 'qrcode.react'

const QrCodeContainer = styled.div`
  background-color: #fff;
`

const QrCode = ({ value }) => (
  <QrCodeContainer className='p-4 my-3'>
    <DefaultQrCode value={value} size={220} />
  </QrCodeContainer>
)

export default QrCode
