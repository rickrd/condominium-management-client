export const UPDATE_USER_EMAIL = 'UPDATE_USER_EMAIL'
export const UPDATE_USER_LOGIN_STATUS = 'UPDATE_USER_LOGIN_STATUS'

export const updateUserEmail = (email) => {
  return { type: UPDATE_USER_EMAIL, email }
}

export const updateUserLoginStatus = (status) => {
  return {type: UPDATE_USER_LOGIN_STATUS, status}
}