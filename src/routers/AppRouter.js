import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import styled from 'styled-components'

import { routes } from './Routes'
import ResponsiveDrawer from '../components/organisms/ResponsiveDrawer'

const StyledMainWrapper = styled.div`
  display: flex;
  margin-top: 80px;

  @media (min-width: 600px) {
    margin-top: 88px;
    margin-left: 264px;
  }
`

const AppRouter = () => {
  return (
    <BrowserRouter>
      <ResponsiveDrawer />
      <StyledMainWrapper>
        <Switch>
          {routes &&
            routes.map(({ exact, path, component }) => (
              <Route exact={exact} path={path}>
                {component}
              </Route>
            ))}
        </Switch>
      </StyledMainWrapper>
    </BrowserRouter>
  )
}

export default AppRouter
