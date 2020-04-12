import React, { useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { routes } from './Routes'
import ResponsiveDrawer from '../components/organisms/ResponsiveDrawer'
import LoginForm from '../components/organisms/LoginForm'
import { updateUserLoginStatus, updateUserEmail } from '../redux/actions'
import { useAuthentication } from '../hooks/useAuthentication'

const StyledMainWrapper = styled.div`
  display: flex;
  margin-top: 80px;

  @media (min-width: 600px) {
    margin-top: 88px;
    margin-left: 264px;
  }
`

const AppRouter = (props) => {
  const {
    user: { loginStatus, email },
    dispatch,
  } = props

  const { getAuthentication, getUserMetadata } = useAuthentication()

  /** componentDidMount as hook */
  useEffect(() => {
    async function handleUserAuthentication() {
      // First check to see if user is logged or not
      if (!loginStatus) {
        const isAuthenticated = await getAuthentication()
        dispatch(updateUserLoginStatus(isAuthenticated))
      } else if (loginStatus && email === '') {
        // If user is logged and email is empty, check for user email
        const magicUser = await getUserMetadata()
        dispatch(updateUserEmail(magicUser.email))
      }
    }

    handleUserAuthentication()
  }, [dispatch, email, loginStatus, getAuthentication, getUserMetadata])

  // If user is not logged, return login form
  if (!loginStatus) return <LoginForm></LoginForm>

  return (
    <BrowserRouter>
      <ResponsiveDrawer />
      <StyledMainWrapper>
        <Switch>
          {routes &&
            routes.map(({ exact, path, component }) => (
              <Route key={path} exact={exact} path={path}>
                {component}
              </Route>
            ))}
        </Switch>
      </StyledMainWrapper>
    </BrowserRouter>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
}

export default connect(mapStateToProps)(AppRouter)
