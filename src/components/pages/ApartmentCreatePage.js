import React from 'react'
import gql from 'graphql-tag'

import CreateApartmentForm from '../organisms/CreateApartmentForm'


// $number: Int!, $block: String!, $residents: [ResidentInput]!
const CREATE_APARTMENT = gql`
  mutation createApartment($input: CreateApartmentInput!) {
    createApartment(input: $input) {
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

const ApartmentCreatePage = () => {
  console.log(CREATE_APARTMENT)
  return (
    <div>
      <h1>CREATE APARTMENT:</h1>
      <CreateApartmentForm mutation={CREATE_APARTMENT} />
    </div>
  )
}

export default ApartmentCreatePage
