import React from 'react'
import styled from 'styled-components'

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  background-color: #212121;
  color: #fff;
`

const Header = () => {
  return (
    <HeaderWrapper>
      <div>CONDOMINIUM MANAGEMENT</div>
      <div>LOGOUT</div>
    </HeaderWrapper>
  )
}

export default Header
