import React from 'react'
import styled from 'styled-components'

import QueryDataList from '../molecules/QueryDataList'

const StyledConfigurationPageMain = styled.main`
  width: 100%;
  
  .title {
    margin-top: 0;
  }
`

const ConfigurationPage = ({ schema }) => {
  const { name, properties, listingQuery } = schema

  return (
    <StyledConfigurationPageMain>
      <header>
        <h1 className="title">{name}(s)</h1>
        <button>create {name}</button>
      </header>

      <QueryDataList schema={schema} query={listingQuery} />
    </StyledConfigurationPageMain>
  )
}

export default ConfigurationPage
