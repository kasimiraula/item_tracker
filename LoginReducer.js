
const loginReducer = (state=JSON.parse(localStorage.getItem('loggedUser')), action) => {
  switch(action.type) {
  case 'LOGIN':
    return action.data
  case 'LOGOUT':
    return null
  default:
    return state
  }
}

export const login = (user) => {
  return {
    type: 'LOGIN',
    data: user
  }
}

export const logout = () => {
  return {
      type : 'LOGOUT'
  }
}

export const initializeLoggedUser = (user) => {
  return {
      type: 'LOGIN',
      data: user
  }
}

export default loginReducer
