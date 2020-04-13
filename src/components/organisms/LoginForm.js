import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { useAuthentication } from '../../hooks/useAuthentication'
import { updateUserLoginStatus } from '../../redux/actions'

const LoginFormWrapper = styled.div`
  position: absolute;
  width: 280px;
  height: 120px;
  left: 50%;
  top: 50%;
  margin-left: -140px;
  margin-top: -110px;
  color: #212121;

  .title {
    font-size: 18px;
  }
`

const LoginForm = (props) => {
  const { handleLogin } = useAuthentication()

  const { dispatch } = props

  const handleFormSubmit = async (e) => {
    const isAuthenticated = await handleLogin(e)
    dispatch(updateUserLoginStatus(isAuthenticated))
  }

  return (
    <LoginFormWrapper>
      <p className="title">Please sign in to access this page:</p>
      <form onSubmit={handleFormSubmit}>
        <input type="email" name="email" id="standard-basic" label="E-mail" required />
        <button variant="contained" color="primary" type="submit">
          Send
        </button>
      </form>
    </LoginFormWrapper>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
}

export default connect(mapStateToProps)(LoginForm)
