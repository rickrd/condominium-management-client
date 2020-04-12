import React from 'react'
import ApartmentsList from '../organisms/ApartmentsList'

const ApartmentConfigurationPage = () => {
  return (
    <main>
      <header>
        <h1>Apartments</h1>
        <button>create apartment</button>
      </header>

      <ApartmentsList></ApartmentsList>
    </main>
  )
}

export default ApartmentConfigurationPage
