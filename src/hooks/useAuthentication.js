import { Magic } from 'magic-sdk'

const useAuthentication = () => {
  // magic setup (should use .env, skipped due to the test)
  const magic = new Magic(`pk_live_0638FF936924A245`)

  const handleLogin = async (e) => {
    e.preventDefault()
    const email = new FormData(e.target).get('email')
    if (email) {
      const token = await magic.auth.loginWithMagicLink({ email })

      return token
    }
  }

  const handleLogout = async () => {
    const isLoggedOut = await magic.user.logout()

    return isLoggedOut
  }

  const getAuthentication = async () => {
    const { user } = magic

    const isAuthenticated = await user.isLoggedIn()

    return isAuthenticated
  }

  const getUserMetadata = async () => {
    const { user } = magic

    const magicUser = await user.getMetadata()

    return magicUser
  }

  return { handleLogin, handleLogout, getAuthentication, getUserMetadata }
}

export { useAuthentication }
