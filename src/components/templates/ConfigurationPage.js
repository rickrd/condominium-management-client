import React from 'react'
import styled from 'styled-components'

import QueryDataList from '../molecules/QueryDataList'
import { NavLink } from 'react-router-dom'
import Button from '../atoms/Button'

const StyledConfigurationPageMain = styled.main`
  width: 100%;
`

const ConfigurationPage = ({ schema }) => {
  const { name, listingQuery, createPath, onRowClick = false } = schema

  return (
    <StyledConfigurationPageMain>
      <header>
        <h1 className="title">{name.toUpperCase()}(S)</h1>
        {onRowClick && <p>You can click on row to view and edit details.</p>}
        <NavLink to={createPath}>
          <Button text={`create ${name}`}></Button>
        </NavLink>
      </header>

      <QueryDataList schema={schema} query={listingQuery} />
    </StyledConfigurationPageMain>
  )
}

export default ConfigurationPage
