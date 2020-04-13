import React from 'react'
import gql from 'graphql-tag'

import EditApartmentForm from '../organisms/EditApartmentForm'
import { Link, useParams, useHistory } from 'react-router-dom'
import { useMutation } from '@apollo/react-hooks'

// $number: Int!, $block: String!, $residents: [ResidentInput]!
const UPDATE_APARTMENT = gql`
  mutation updateApartment($input: UpdateApartmentInput!) {
    updateApartment(input: $input) {
      apartment {
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
  }
`

const DELETE_APARTMENT = gql`
  mutation deleteApartment($input: DeleteApartmentInput!) {
    deleteApartment(input: $input) {
      apartment {
        _id
      }
    }
  }
`

const ApartmentEditPage = () => {
  const { _id } = useParams()
  const [deleteApartment, { data }] = useMutation(DELETE_APARTMENT)

  const history = useHistory()

  const handleDeleteApartment = (deleteApartment) => {
    deleteApartment({
      variables: {
        input: { _id },
      },
    })
    setTimeout(() => {
      history.push('/')
    }, 1000)
  }
  return (
    <div>
      <h1>UPDATE APARTMENT:</h1>
      <EditApartmentForm mutation={UPDATE_APARTMENT} />
      <h2>
        You can also <Link onClick={() => handleDeleteApartment(deleteApartment)}>delete</Link> this apartment.
      </h2>
    </div>
  )
}

export default ApartmentEditPage
