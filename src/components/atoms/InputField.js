import React from 'react'
import styled from 'styled-components'

const StyledLabel = styled.label`
  font-size: 14px;
  color: rgb(104, 111, 119);
  cursor: pointer;
`

const StyledInputField = styled.input`
  display: block;
  width: 100%;
  min-height: 40px;
  background-color: rgb(255, 255, 255);
  text-indent: 10px;
  font-size: 14px;
  color: rgb(73, 80, 87);
  vertical-align: middle;
  cursor: auto;
  -webkit-appearance: none;
  margin: 5px 0px;
  padding: 1rem 0px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(173, 181, 189);
  border-image: initial;
  border-radius: 4px;
  outline: none;
`

const InputField = ({ type = 'text', name, onChange, value, label = '', required = false }) => {
  return label !== '' ? (
    <StyledLabel>
      {label}
      <StyledInputField type={type} name={name} onChange={onChange} value={value} required={required}></StyledInputField>
    </StyledLabel>
  ) : (
    <StyledInputField type={type} name={name} onChange={onChange} value={value} required={required}></StyledInputField>
  )
}

export default InputField
