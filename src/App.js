import React from 'react'
import { connect } from 'react-redux'


import Home from './components/pages/Home'
import LoginForm from './components/organisms/LoginForm'
import {getAuthentication} from './contexts/Authentication'
import {updateUserEmail} from './redux/actions'
import {updateUserLoginStatus} from './redux/actions'


function App(props) {
  console.log(props)
  const { user, dispatch } = props
  console.log(user)

  if (!user.loginStatus) {
    getAuthentication()
      .then((res) => {
        console.log(res)
        dispatch(updateUserLoginStatus({res}))
      })
    return <LoginForm></LoginForm>
  }

  return (
      <Home></Home>
  )
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(App)
