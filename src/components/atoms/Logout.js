import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'

import { handleLogout } from '../../contexts/Authentication'

const LogoutWrapper = styled.div`
  cursor: pointer;
`

const Logout = (props) => {
  const {
    user: { loginStatus },
    dispatch,
  } = props

  if (loginStatus)
    return (
      <LogoutWrapper>
        <Button
          onClick={() => {
            handleLogout(dispatch)
          }}
          variant="contained"
          color="secondary"
        >
          LOGOUT
        </Button>
      </LogoutWrapper>
    )

  return null
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
}

export default connect(mapStateToProps)(Logout)
