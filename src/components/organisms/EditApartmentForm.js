import React from 'react'
import gql from 'graphql-tag'

import Form from '../molecules/Form'
import { useQuery } from '@apollo/react-hooks'
import { useParams } from 'react-router-dom'

const GET_APARTMENT = gql`
  query apartment($input: GetApartmentInput!) {
    apartment(input: $input) {
      _id
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
`
const EditApartmentForm = ({ mutation }) => {

  let { _id } = useParams()
  const { loading, error, data } = useQuery(GET_APARTMENT, { variables: { input: { _id } } })

  return loading ? (
    <p>Loading...</p>
  ) : error ? (
    <p>An error occured. Please try again</p>
  ) : (
    <div>
      {/* {console.log(JSON.stringify(data.apartment[0]))} */}
      <Form initialValues={data.apartment[0]} mutation={mutation}></Form>
    </div>
  )
}

export default EditApartmentForm
