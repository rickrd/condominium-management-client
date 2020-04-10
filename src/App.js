import React from 'react'
import { connect } from 'react-redux'

import ResponsiveDrawer from './components/organisms/ResponsiveDrawer'
import LoginForm from './components/organisms/LoginForm'
import { getAuthentication, getUserMetadata } from './contexts/Authentication'

function App(props) {
  const {
    user: { loginStatus, email },
    dispatch,
  } = props

  // First check to see if user is logged or not
  if (loginStatus === null) {
    getAuthentication(dispatch)
  } else if (loginStatus && email === '') {
    // If user is logged and email is empty, check for user email
    getUserMetadata(dispatch)
  }

  // If user is not logged, return login form
  if (loginStatus === false) return <LoginForm></LoginForm>

  if (loginStatus && email !== '') return <ResponsiveDrawer></ResponsiveDrawer>

  return null
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
}

export default connect(mapStateToProps)(App)
