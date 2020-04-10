import React from 'react'
import {connect} from 'react-redux'

import { handleLogin } from '../../contexts/Authentication'

const LoginForm = (props) => {
  const {
    dispatch
  } = props
  return (
    <div>
      <h1>Please sign up or login</h1>
      <form onSubmit={(e) => handleLogin(e, dispatch)}>
        <input type="email" name="email" required="required" placeholder="Enter your email" />
        <button type="submit">Send</button>
      </form>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(LoginForm)
