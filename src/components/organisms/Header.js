import React from 'react'
import styled from 'styled-components'

const HeaderWrapper = styled.div`
  width: 100%;
  padding: 16px;
  background-color: #212121;
  color: #fff;
`

const Header = () => {
  return (
    <HeaderWrapper>
      <div>CONDOMINIUM MANAGEMENT</div>
    </HeaderWrapper>
  )
}

export default Header
