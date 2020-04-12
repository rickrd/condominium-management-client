import React from 'react'
import styled from 'styled-components'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'

const GET_RESIDENTS = gql`
  {
    apartments {
      residents {
        _id
        name
      }
    }
  }
`

const HomeWrapper = styled.div`
  margin: 0;
`

const Home = () => {
  const { loading, error, data } = useQuery(GET_RESIDENTS)

  return (
    <HomeWrapper>
      <h2>LIST OF ALL APARTMENTS:</h2>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>An error occured. Please try again</p>
      ) : (
        <div>
          <h2>LIST OF ALL RESIDENTS:</h2>
          {console.log(data)}
          {data.apartments.map(({ residents }) => residents.map((resident) => <div>{resident.name}</div>)
          )}
        </div>
      )}
    </HomeWrapper>
  )
}

export default Home
