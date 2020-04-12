import React from 'react'
import gql from 'graphql-tag'
import ConfigurationPage from '../templates/ConfigurationPage'

const GET_APARTMENTS = gql`
  {
    apartments {
      number
      _id
    }
  }
`

const apartmentSchema = {
  name: 'apartment',
  properties: {
    number: {
      title: 'Number',
      type: 'text',
    },
    block: {
      title: 'Block',
      type: 'text',
    },
  },
  listingQuery: GET_APARTMENTS,
}

const ApartmentConfigurationPage = () => {
  return <ConfigurationPage schema={apartmentSchema} />
}

export default ApartmentConfigurationPage
