import { UPDATE_USER_EMAIL} from './actions'

const initialState = {
  user: {
    isLoggedIn: false,
    email: ''
  }
}

const user = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_USER_EMAIL:
      return Object.assign({}, state, {
        user: {
          isLoggedIn: true,
          email: state.email
        }
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