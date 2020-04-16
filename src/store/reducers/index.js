import { combineReducers } from 'redux'
import * as t from '../types'

import app from './app'
import theme from './theme'

const appReducer = combineReducers({
  app,
  theme
})

const rootReducer = (state, action) => {
  if (action.type === t.USER_LOGOUT) {
    state = undefined
  }
  return appReducer(state, action)
}

export default rootReducer
