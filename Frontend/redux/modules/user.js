import actionCreator from '../actionCreator'

const userAction = actionCreator('user')

const SET_USER = userAction('SET_USER')

const initState = {
  user: {},
}

// Reducers
export default (state = initState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.user,
      }

    default: return state
  }
}

// Actions
export const actions = {
  setUser: (user) => ({
    type: SET_USER,
    user,
  }),
}
