import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  font-size: 14px;
  color: rgb(134, 142, 150);
  opacity: 1;
  cursor: pointer;
  flex: 1 1 100%;
  margin: 10px 0px;
  padding: 10px 16px;
  border-radius: 4px;
  background: rgb(255, 255, 255);
  transition: opacity 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s, border-color 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.4s;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(206, 212, 218);
  border-image: initial;
`

const Button = ({ text, onClick }) => <StyledButton onClick={onClick}>{text}</StyledButton>

export default Button
