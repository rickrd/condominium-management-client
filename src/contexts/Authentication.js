import React, { useState } from 'react'
import { Magic } from 'magic-sdk'

const magic = new Magic(`${process.env.REACT_APP_MAGIC_KEY}`)

const handleLogin = async (e, setIsLoggedIn) => {
  e.preventDefault()
  const email = new FormData(e.target).get('email')
  if (email) {
    await magic.auth.loginWithMagicLink({ email }).then(() => {
      setIsLoggedIn(true)
    })
  }
}

const handleLogout = async (setIsLoggedIn, setUserEmail) => {
  await magic.user.logout().then((res) => {
    setIsLoggedIn(false)
    setUserEmail(false)
  })
}

const getAuthentication = async () => {
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

const ContextProvider = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userEmail, setUserEmail] = useState(false)
  // const { user } = magic
  if (!isLoggedIn) {
    const checkUserAuthentication = getAuthentication()
      .then((res) => {
        setIsLoggedIn(res)
      })
      .catch((error) => {
        console.log(error)
      })
  } else if (!userEmail) {
    const checkUserMetadata = getUserMetadata()
      .then((res) => {
        console.log(res)
        setUserEmail(res.email)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  if (isLoggedIn && userEmail) {
    return (
      <div>
        <h1>Current user: ${userEmail}</h1>
        <button onClick={() => handleLogout(setIsLoggedIn, setUserEmail)}>Logout</button>
      </div>
    )
  }

  return (
    <div>
      <h1>Please sign up or login</h1>
      <form onSubmit={(e) => handleLogin(e, setIsLoggedIn)}>
        <input type="email" name="email" required="required" placeholder="Enter your email" />
        <button type="submit">Send</button>
      </form>
    </div>
  )
}

export default ContextProvider
