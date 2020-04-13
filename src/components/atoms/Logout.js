import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { useAuthentication } from '../../hooks/useAuthentication'
import { updateUserLoginStatus } from '../../redux/actions'
import Button from './Button'

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
      <Button onClick={handleLogoutButtonClick} text="LOGOUT"></Button>
    </LogoutWrapper>
  ) : null
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
}

export default connect(mapStateToProps)(Logout)
