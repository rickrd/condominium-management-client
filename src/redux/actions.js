export const UPDATE_USER_EMAIL = 'UPDATE_USER'

export const updateUserEmail = (email) => {
  return { type: UPDATE_USER_EMAIL, email }
}
