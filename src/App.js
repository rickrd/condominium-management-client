import React from 'react'
import { createStore } from 'redux'
import { Provider as ReduxProvider } from 'react-redux'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'

import reducers from './redux/reducers'
import AppRouter from './routers/AppRouter'

// setup your client
const client = new ApolloClient({
  uri: 'http://localhost:3000/dev/graphql',
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
