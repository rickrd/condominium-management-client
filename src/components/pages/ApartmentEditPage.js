import React from 'react'
import gql from 'graphql-tag'

import EditApartmentForm from '../organisms/EditApartmentForm'

// $number: Int!, $block: String!, $residents: [ResidentInput]!
const UPDATE_APARTMENT = gql`
  mutation updateApartment($input: UpdateApartmentInput!) {
    updateApartment(input: $input) {
      apartment {
        number
        block
        residents {
          name
          birthdate
          phone
          email
        }
      }
    }
  }
`

const ApartmentEditPage = () => {
  return (
    <div>
      <h1>UPDATE APARTMENT:</h1>
      <EditApartmentForm mutation={UPDATE_APARTMENT} />
    </div>
  )
}

export default ApartmentEditPage
