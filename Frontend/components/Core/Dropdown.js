import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
  Dropdown as DefaultDropdown,
  DropdownToggle as DefaultDropdownToggle,
  DropdownMenu as DefaultDropdownMenu,
  DropdownItem as DefaultDropdownItem
} from 'reactstrap'

import colors from '../../config/colors'

const DropdownStyled = styled(DefaultDropdown)`
  img {
    cursor: pointer;
    max-height: 24px;
  }
`

const DropdownMenu = styled(DefaultDropdownMenu)`
  width: 100%;
`

const DropdownItem = styled(DefaultDropdownItem)`
  padding: 0.375rem 0.75rem;
  font-weight: 100;
  &:hover {
    color: #FFF;
    background-color: ${colors.mainOrange} !important;
  }
`

const defaultStyle = `
  background-color: #FFF !important;
  border: 0.5px solid ${colors.mainOrange} !important;
  color: ${colors.mainFont} !important;
`

const DropdownToggle = styled(DefaultDropdownToggle)`
  display: flex;
  justify-content: space-between;

  font-weight: 100;
  width: 100%;
  margin-bottom: 10px;

  ${defaultStyle}

  &:active, &:hover {
    ${defaultStyle}
  }
  &:focus {
    box-shadow: none !important;
  }

  &.dropdown-toggle::after {
    display: flex;
    justify-content: center;
    width: 0;
    height: 100%;
    min-height: 20px;
  }
`

export default class Dropdown extends React.Component {
  state = {
    dropdownOpen: false,
  }

  static propTypes = {
    typeName: PropTypes.string,
    dropdownItems: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      itemName: PropTypes.string,
    })),
    handleItems: PropTypes.func,
  }

  static defaultProps = {
    typeName: 'Default Type Name',
    dropdownItems: [{ id: -1, itemName: 'default items' }],
    handleItems: () => null,
  }

  toggle = () => {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen,
    }))
  }

  render () {
    const { typeName, dropdownItems, handleItems } = this.props
    return (
      <DropdownStyled isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle >
          { typeName }
          <img src='/static/img/dropdown_arrow.png' />
        </DropdownToggle>
        <DropdownMenu className='py-0'>
          {
            dropdownItems.map(({ id, itemName }, i) => (
              <DropdownItem onClick={() => handleItems(id)} key={`${itemName}-${i}`}>{itemName}</DropdownItem>
            ))
          }
        </DropdownMenu>
      </DropdownStyled>
    )
  }
}
