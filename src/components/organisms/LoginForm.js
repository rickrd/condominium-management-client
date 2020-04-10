import React from 'react'
import { connect } from 'react-redux'
import { Grid, Icon, Button, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import styled from 'styled-components'

import { handleLogin } from '../../contexts/Authentication'

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}))

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
  const classes = useStyles()

  const { dispatch } = props

  return (
    <LoginFormWrapper>
      <p className="title">Please sign in to access this page:</p>
      <form onSubmit={(e) => handleLogin(e, dispatch)}>
        <TextField type="email" name="email" id="standard-basic" label="E-mail" required />
        <Button variant="contained" color="primary" type="submit" className={classes.button} endIcon={<Icon>send</Icon>}>
          Send
        </Button>
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
