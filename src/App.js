import React from 'react'
import { createStore } from 'redux'
import { Provider as ReduxProvider } from 'react-redux'
import ApolloClient, { InMemoryCache } from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'

import reducers from './redux/reducers'
import AppRouter from './routers/AppRouter'

// client setup (should use .env, skipped due to the test)
const client = new ApolloClient({
  uri: 'http://localhost:3000/dev/graphql',
  cache: new InMemoryCache({
    addTypename: false,
    dataIdFromObject: o => o._id
  })
})

const store = createStore(reducers)

function App() {

  return (
    <React.StrictMode>
    <ApolloProvider client={client}>
      <ReduxProvider store={store}>
        <AppRouter/>
      </ReduxProvider>
    </ApolloProvider>
  </React.StrictMode>
  )
}

export default App
