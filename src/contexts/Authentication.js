import { Magic } from 'magic-sdk'

import { updateUserLoginStatus } from '../redux/actions'

const magic = new Magic(`${process.env.REACT_APP_MAGIC_KEY}`)

export const handleLogin = async (e, dispatch) => {
  e.preventDefault()
  const email = new FormData(e.target).get('email')
  if (email) {
    await magic.auth
      .loginWithMagicLink({ email })
      .then((res) => {
        console.log('login')
        console.log(res)
        dispatch(updateUserLoginStatus(true))
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

const handleLogout = async (setIsLoggedIn, setUserEmail) => {
  await magic.user.logout().then((res) => {
    setIsLoggedIn(false)
    setUserEmail(false)
  })
}

export const getAuthentication = async () => {
  const { user } = magic
  const UserIsLoggedIn = await user.isLoggedIn()

  const isLoggedIn = UserIsLoggedIn

  return isLoggedIn
}

const getUserMetadata = async () => {
  const { user } = magic
  const userMetadata = await user.getMetadata()

  const metadata = userMetadata
  return metadata
}
