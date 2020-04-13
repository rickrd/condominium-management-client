import React from 'react'
import gql from 'graphql-tag'
import ConfigurationPage from '../templates/ConfigurationPage'

const GET_RESIDENTS = gql`
  {
    apartments {
      residents {
        name
        birthdate
        phone
        email
      }
    }
  }
`

const residentSchema = {
  name: 'resident',
  createPath: '/apartments/create',
  properties: {
    name: {
      title: 'Name',
      type: 'text',
      renderCell: ({ name }) => {
        return (
          <span>
            {name}
            <br />
          </span>
        )
      },
    },
    birthdate: {
      title: 'Birthdate',
      type: 'text',
      renderCell: ({ birthdate }) => {
        return (
          <span>
            {birthdate}
            <br />
          </span>
        )
      },
    },
    phone: {
      title: 'Phone',
      type: 'text',
      renderCell: ({ phone }) => {
        return (
          <span>
            {phone}
            <br />
          </span>
        )
      },
    },
    email: {
      title: 'E-mail',
      type: 'text',
      renderCell: ({ email }) => {
        return (
          <span>
            {email}
            <br />
          </span>
        )
      },
    },
  },
  listingQuery: {
    nest: ['apartments', 'residents'],
    value: GET_RESIDENTS,
  },
}

const ResidentConfigurationPage = () => {
  return <ConfigurationPage schema={residentSchema} />
}

export default ResidentConfigurationPage
