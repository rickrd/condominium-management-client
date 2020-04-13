import React from 'react'
import styled from 'styled-components'

import QueryDataList from '../molecules/QueryDataList'
import { Redirect, NavLink } from 'react-router-dom'
import Button from '../atoms/Button'

const StyledConfigurationPageMain = styled.main`
  width: 100%;
`

const ConfigurationPage = ({ schema }) => {
  const { name, properties, listingQuery, createPath } = schema

  return (
    <StyledConfigurationPageMain>
      <header>
        <h1 className="title">{name.toUpperCase()}(S)</h1>
        <NavLink to={createPath}>
          <Button text={`create ${name}`}></Button>
        </NavLink>
      </header>

      <QueryDataList schema={schema} query={listingQuery} />
    </StyledConfigurationPageMain>
  )
}

export default ConfigurationPage
