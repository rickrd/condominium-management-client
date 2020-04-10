import { Magic } from 'magic-sdk'

import { updateUserLoginStatus, updateUserEmail } from '../redux/actions'

const magic = new Magic(`${process.env.REACT_APP_MAGIC_KEY}`)

export const handleLogin = async (e, dispatch) => {
  e.preventDefault()
  const email = new FormData(e.target).get('email')
  if (email) {
    await magic.auth
      .loginWithMagicLink({ email })
      .then(() => {
        dispatch(updateUserLoginStatus(true))
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

export const handleLogout = async (dispatch) => {
  await magic.user.logout().then((res) => {
    dispatch(updateUserLoginStatus(false))
  })
}

export const getAuthentication = async (dispatch) => {
  const { user } = magic
  await user.isLoggedIn().then(res => {
    dispatch(updateUserLoginStatus(res))
  })
}

export const getUserMetadata = async (dispatch) => {
  const { user } = magic
  await user.getMetadata().then(res => {
    dispatch(updateUserEmail(res.email))
  })
}