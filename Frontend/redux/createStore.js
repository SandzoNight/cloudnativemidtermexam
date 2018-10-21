import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import reducers from './modules/reducers'
import promiseMiddleware from './middlewares/promiseMiddleware'

export function initializeStore (initialState = {}) {
  return createStore(
    reducers,
    initialState,
    composeWithDevTools(
      applyMiddleware(
        thunkMiddleware,
        promiseMiddleware
      )
      // Add additional middleware here
    )
  )
}
