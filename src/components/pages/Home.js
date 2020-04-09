import React from 'react'
import styled from 'styled-components'

const HomeWrapper = styled.div`
  margin: 0;
  font-family: 'Roboto';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`

const Home = () => {
  return (
    <HomeWrapper>
      <div>This is the home</div>
    </HomeWrapper>
  )
}

export default Home
