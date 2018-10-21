import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
  Input as DefaultInput
} from 'reactstrap'

import { faCamera, faSearch } from '@fortawesome/free-solid-svg-icons'
import ReactSelect, { components } from 'react-select'

import { medium, normal, small } from '../../config/fontSize'
import colors from '../../config/colors'

import Icon from './Icon'

const Label = styled.label`
  font-size: ${medium};
  color: ${colors.mainOrange};
`

const TextField = styled(DefaultInput)`
  font-size: ${normal};
  font-weight: 100;
  padding: 5px 7px;
  border: 0.5px solid #E4E4E4;
  background-color: #FFFFFF;
  margin-bottom: 10px;

  &:focus {
    border: 0.5px solid ${colors.mainOrange};
    box-shadow: none;
  }
  &::placeholder {
    color: #DFDFDF;
  }
`

const DropdownIndicator = (props) => (
  components.DropdownIndicator && (
    <components.DropdownIndicator {...props}>
      <Icon
        style={{
          color: '#C4C4C4',
          transform: 'scale(-1, 1)',
        }}
        icon={faSearch}
      />
    </components.DropdownIndicator>
  )
)

const NoOptionsMessage = (props) => (
  <components.NoOptionsMessage {...props}>
    ไม่พบข้อมูล
  </components.NoOptionsMessage>
)

const colorStyle = {
  control: (styles, { isFocused }) => {
    return ({
      ...styles,
      borderRadius: '5px',
      boxShadow: isFocused ? '#F2532C' : null,
      borderColor: isFocused ? '#F2532C' : '#E4E4E4',
      '&:hover': {
        borderColor: isFocused ? '#F2532C' : '#E4E4E4',
      },
      color: '#C4C4C4',
    })
  },
  option: (styles, { isDisabled, isFocused }) => ({
    ...styles,
    backgroundColor: isDisabled
      ? null
      : isFocused
        ? '#F2532C'
        : null,
    color: isDisabled
      ? null
      : isFocused
        ? '#FFF'
        : null,
    borderRadius: isDisabled
      ? null
      : isFocused
        ? '5px'
        : null,
  }),
}

const Search = ({ options, onChange, value, placeholder }) => (
  <ReactSelect
    components={{ DropdownIndicator, NoOptionsMessage }}
    options={options}
    placeholder={placeholder}
    styles={colorStyle}
    onChange={onChange}
    value={value}
  />
)

Search.defaultProps = {
  placeholder: 'Search',
  onChange: () => null,
  value: null,
  options: [],
}

Search.propTypes = {
  options: PropTypes.array,
  onChange: PropTypes.func,
  value: PropTypes.object,
  placeholder: PropTypes.string,
}

const selectStyles = {
  container: (styles) => ({
    ...styles,
  }),
  control: (styles) => {
    return ({
      ...styles,
      borderRadius: '5px',
      boxShadow: '#F2532C',
      borderColor: '#F2532C',
      '&:hover': {
        borderColor: '#F2532C',
      },
      background: '#FFF',
    })
  },
  option: (styles, { isDisabled, isFocused }) => ({
    ...styles,
    backgroundColor: isDisabled
      ? null
      : isFocused
        ? '#F2532C'
        : null,
    color: isDisabled
      ? null
      : isFocused
        ? '#FFF'
        : null,
  }),
  indicatorsContainer: (styles) => ({
    ...styles,
    '& > div': {
      padding: '4px',
    },
  }),
}

const Select = ({ placeholder, onChange, value, options, ...props }) => (
  <ReactSelect
    options={options}
    placeholder={placeholder}
    styles={selectStyles}
    isSearchable={false}
    onChange={onChange}
    value={value}
    components={{ IndicatorSeparator: null }}
    {...props}
  />
)

Select.defaultProps = {
  value: null,
  onChange: () => null,
  placeholder: '',
  options: [],
}

Select.propTypes = {
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.object,
  options: PropTypes.array,
}

const Input = ({ label, onChange, placeholder, value, type, name }) => (
  <Fragment>
    <Label>
      { label }
    </Label>
    <TextField value={value || ''} onChange={onChange} placeholder={placeholder} type={type || 'text'} name={name} />
  </Fragment>
)

Input.defaultProps = {
  label: 'Default Label',
  onChange: () => null,
}

Input.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
}

const UploadWrapper = styled.div`
  position: relative;
  overflow: hidden;
  display: inline-block;
  width: 100%;
  text-align: center;
  margin-bottom: 1em;

  input[type=file] {
    position: absolute;
    display: block;
    opacity: 0;
    z-index: 0;
    width: 100%;
    height: 100%;

    cursor: pointer;
    left: 0;
    right: 0;
    margin: 0 auto;
  }

  button {
    svg {
      font-size: 50px;
      color: #c4c4c4;
      margin-bottom: 0.4em;
    }
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 8px 5px;
    width: 100%;
    border: 0.5px solid #E4E4E4;
    background: #EFEFEF;
    color: #4F4F4F;
    min-height: 180px;
    font-size: ${small};
  }
`

const UploadImage = ({ label, icon, onChange }) => (
  <UploadWrapper>
    <input type='file' accept='image/*' />
    <button>
      <Icon icon={icon} />
      { label }
    </button>
  </UploadWrapper>
)

UploadImage.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.object,
  onChange: PropTypes.func,
}

UploadImage.defaultProps = {
  label: 'Upload your organizer cover image',
  icon: faCamera,
  onChange: () => null,
}

export default Input
export {
  UploadImage,
  Search,
  Select
}
