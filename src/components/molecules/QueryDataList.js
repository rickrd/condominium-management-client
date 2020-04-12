import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { Paper } from '@material-ui/core'
import styled from 'styled-components'

const StyledListWrapper = styled.div`
  display: flex;
  flex-direction: row;

  .link {
    text-decoration: none;
  }

  .apartmentListItem {
    padding: 4px 14px;
    margin-right: 12px;
  }
`

const QueryDataList = ({ query }) => {
  const { loading, error, data } = useQuery(query)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  console.log(data)

  return (
    <StyledListWrapper>
      <Paper className="apartmentListItem">
        <p>
          <b>Number: </b>
          {20}
        </p>
        <p>
          <b>Block: </b>
          {24}
        </p>
      </Paper>
    </StyledListWrapper>
  )
}

export default QueryDataList
