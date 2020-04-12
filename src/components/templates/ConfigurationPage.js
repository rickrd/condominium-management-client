import React from 'react'

import QueryDataList from '../molecules/QueryDataList'

const ConfigurationPage = ({ schema: { name, properties, listingQuery } }) => {
  return (
    <main>
      <header>
        <h1>{name}(s)</h1>
        <button>create {name}</button>
      </header>

      <QueryDataList query={listingQuery} />
    </main>
  )
}

export default ConfigurationPage
