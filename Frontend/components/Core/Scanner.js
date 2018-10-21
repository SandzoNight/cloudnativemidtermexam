import React from 'react'
import PropTypes from 'prop-types'
import QRCode from 'react-qr-reader'

const cameraConfig = {
  delay: 350,
}

const handleError = (err) => {
  console.error(err)
}

const Scanner = ({ handleScan, ...props }) => (
  <QRCode {...cameraConfig} {...props} onScan={handleScan} onError={handleError} />
)

Scanner.defaultProps = {
  handleScan: () => null,
}

Scanner.propTypes = {
  handleScan: PropTypes.func,
}

export default Scanner
