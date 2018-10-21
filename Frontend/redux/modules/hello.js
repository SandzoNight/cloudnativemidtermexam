import actionCreator from '../actionCreator'
const helloAction = actionCreator('hello')

const SET_FIELD = helloAction('SET_FIELD')

const initState = {
  hello: 'test hello',
}

// Reducers
export default (state = initState, action) => {
  switch (action.type) {
    case SET_FIELD:
      return Object.assign({}, state, {
        [action.field]: action.value,
      })

    default: return state
  }
}

// Actions
export const actions = {
  setField: (field, value) => ({
    type: SET_FIELD,
    field,
    value,
  }),
}
