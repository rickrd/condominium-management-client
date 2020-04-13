import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { useAuthentication } from '../../hooks/useAuthentication'
import { updateUserLoginStatus } from '../../redux/actions'

const LogoutWrapper = styled.div`
  cursor: pointer;
`

const Logout = (props) => {
  const { handleLogout } = useAuthentication()

  const {
    user: { loginStatus },
    dispatch,
  } = props

  const handleLogoutButtonClick = async () => {
    const isLoggedOut = await handleLogout()
    dispatch(updateUserLoginStatus(!isLoggedOut))
  }

  return loginStatus ? (
    <LogoutWrapper>
      <button onClick={handleLogoutButtonClick} variant="contained" color="secondary">
        LOGOUT
      </button>
    </LogoutWrapper>
  ) : null
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
}

export default connect(mapStateToProps)(Logout)
