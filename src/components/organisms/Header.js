import React from 'react'
import styled from 'styled-components'

import Logout from '../atoms/Logout'
import Welcome from '../atoms/Welcome'

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  background-color: #212121;
  color: #fff;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`

const Header = () => {
  return (
    <HeaderWrapper>
      <div>CONDOMINIUM MANAGEMENT</div>
      <Welcome></Welcome>
      <Logout></Logout>
    </HeaderWrapper>
  )
}

export default Header
