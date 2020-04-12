import React from 'react'
import gql from 'graphql-tag'
import ConfigurationPage from '../templates/ConfigurationPage'

const GET_APARTMENTS = gql`
  {
    apartments {
      _id
      number
      block
      residents {
        name
      }
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
    residents: {
      title: 'Residents',
      type: 'array',
      renderCell: ({residents}) => {
        return residents.map((resident) => <span>{resident.name}</span>)
      },
    },
  },
  listingQuery: {
    name: 'apartments',
    value: GET_APARTMENTS,
  },
}

const ApartmentConfigurationPage = () => {
  return <ConfigurationPage schema={apartmentSchema} />
}

export default ApartmentConfigurationPage
