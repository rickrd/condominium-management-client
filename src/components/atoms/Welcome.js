import React from 'react'
import { connect } from 'react-redux'

const Welcome = (props) => {
  const {
    user: { email },
  } = props

  if (email !== '') return <div>Welcome {email}!</div>

  return null
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
}

export default connect(mapStateToProps)(Welcome)
