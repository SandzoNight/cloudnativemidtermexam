import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import {
  Container as DefaultContainer,
  Row,
  Col
} from 'reactstrap'
import Icon from './Icon'
import { Header, SubTitle, Paragraph } from './Text'
import QrCode from './QrCode'
import { ButtonOutlineAbsolute } from './Button'

const ModalContainer = styled.div`
  display: flex;
  visibility: ${props => `${props.isDisplay ? 'visible' : 'hidden'}`};
  opacity: ${props => `${props.isDisplay ? '1' : '0'}`};
  position: fixed;
  z-index: 1030;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  transition: opacity .2s,visibility .2s;
`
const ModalContent = styled.div`
  background-color: ${props => props.background ? props.background : '#FFF'};
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 576px) {
    margin: 0 auto;
    width:450px;
    height: 70%;
    align-self: center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
  }
  z-index: 100;
`

const Title = styled.div`
  min-height: 50px;
  font-size: 20px;
  padding: 13px 0;
  text-align: center;
  font-weight: bold;
  color: #333333;
  ${props => props.title && 'border-bottom: 1px solid #4F4F4F;'}
`

const CloseIcon = styled(Icon)`
  margin-right: 16px;
  margin-top: 5px;
  &:hover {
    cursor: pointer;
  }
  &:active {
    background: #ececec;
  }
`

const EmptyArea = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  background-color: rgba(0,0,0,0.3);
  z-index: 1;
`

class Modal extends Component {
  static propTypes = {
    isDisplay: PropTypes.bool,
    title: PropTypes.string,
    handleModal: PropTypes.func,
    background: PropTypes.string,
  }

  render () {
    const { children, isDisplay, title, handleModal, background } = this.props
    return (
      <ModalContainer isDisplay={isDisplay}>
        <ModalContent background={background} >
          <Title title={title}>
            {title}
            <CloseIcon className='float-right' onClick={handleModal} icon={faTimes} />
          </Title>
          {children}
        </ModalContent>
        <EmptyArea onClick={handleModal} />
      </ModalContainer>
    )
  }
}

const OrgContent = styled.div`
  height: 75%;
`

const ModalQrCode = ({ isDisplay, handleModal, name, code }) => (
  <Modal isDisplay={isDisplay} handleModal={handleModal} background={'#F7F7F7'}>
    <OrgContent className='d-flex flex-column align-items-center justify-content-center'>
      <Header>QR Code</Header>
      <QrCode value={code} />
      <SubTitle>{name}</SubTitle>
      <Paragraph>{code}</Paragraph>
    </OrgContent>
  </Modal>
)

ModalQrCode.propTypes = {
  isDisplay: PropTypes.bool,
  handleModal: PropTypes.func,
  name: PropTypes.string,
  code: PropTypes.string,
}

const Container = styled(DefaultContainer)`
  background-color: #F7F7F7;
`

const ModalOrganizer = ({ isDisplay, handleModal, organizer, handleJoin }) => (
  <Modal isDisplay={isDisplay} handleModal={handleModal} background={'#F7F7F7'} className='position-relative'>
    <Container>
      <Row className='h-100'>
        <Col xs={12}>
          <img className='w-100 mb-3' src={organizer.image} />
        </Col>
        <Col xs={12}>
          <Header>{organizer.orgName}</Header>
          <SubTitle>{organizer.orgType}</SubTitle>
          <Paragraph>{organizer.description}</Paragraph>
        </Col>
        <ButtonOutlineAbsolute handleClick={handleJoin} name='JOIN' />
      </Row>
    </Container>
  </Modal>
)

ModalOrganizer.propTypes = {
  isDisplay: PropTypes.bool,
  handleModal: PropTypes.func,
  organizer: PropTypes.shape({
    orgName: PropTypes.string,
    orgType: PropTypes.string,
    description: PropTypes.string,
  }),
  handleJoin: PropTypes.func,
}

export default Modal

export {
  ModalQrCode,
  ModalOrganizer
}
