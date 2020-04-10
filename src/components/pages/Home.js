import React from 'react'
import styled from 'styled-components'

import ApartmentsList from '../organisms/ApartmentsList'

const HomeWrapper = styled.div`
  margin: 0;
  font-family: 'Roboto';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #FAFAFF;
  color: #212121;
`

const Home = () => {
  return (
    <HomeWrapper>
      <h2>LIST OF ALL APARTMENTS:</h2>
      <ApartmentsList></ApartmentsList>
      <h2>LIST OF ALL RESIDENTS:</h2>
      <div>Residents List</div>
    </HomeWrapper>
  )
}

export default Home
