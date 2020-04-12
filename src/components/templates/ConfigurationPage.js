import React from 'react'
import styled from 'styled-components'

import QueryDataList from '../molecules/QueryDataList'
import { Redirect, NavLink } from 'react-router-dom'

const StyledConfigurationPageMain = styled.main`
  width: 100%;

  .title {
    margin-top: 0;
  }
`

const ConfigurationPage = ({ schema }) => {
  const { name, properties, listingQuery, createPath } = schema

  return (
    <StyledConfigurationPageMain>
      <header>
        <h1 className="title">{name}(s)</h1>
        <NavLink to={createPath}>
          <button>create {name}</button>
        </NavLink>
      </header>

      <QueryDataList schema={schema} query={listingQuery} />
    </StyledConfigurationPageMain>
  )
}

export default ConfigurationPage
