import { UPDATE_USER_EMAIL, UPDATE_USER_LOGIN_STATUS} from './actions'

const initialState = {
  user: {
    loginStatus: false,
    email: ''
  }
}

const user = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_USER_EMAIL:
      return Object.assign({}, state, {
          loginStatus: state.loginStatus,
          email: action.email
      })

    case UPDATE_USER_LOGIN_STATUS:
      return Object.assign({}, state, {
          loginStatus: action.status,
          email: state.email
      })
    
    default:
      return state;
  }
}

export default function reducers (state = initialState, action) {
  return {
    user: user(state.user, action)
  }
}