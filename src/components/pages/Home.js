import React from 'react'
import styled from 'styled-components'
import ApartmentConfigurationPage from './ApartmentConfigurationPage'
import ResidentConfigurationPage from './ResidentConfigurationPage'

const HomeWrapper = styled.div`
  margin: 0;
  max-width: 100%;
`

const Home = () => {
  return (
    <HomeWrapper>
      <h1>CONDOMINIUM MANAGEMENT</h1>
      <p>Here you can manage the apartments and residents of your condominium.</p>
      <h2>LIST OF ALL APARTMENTS:</h2>
      <ApartmentConfigurationPage />
      <h2>LIST OF ALL RESIDENTS:</h2>
      <ResidentConfigurationPage />
    </HomeWrapper>
  )
}

export default Home
