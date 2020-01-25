import { combineReducers } from 'redux'
import * as t from '../types'

import theme from './theme'

const appReducer = combineReducers({
  theme
})

const rootReducer = (state, action) => {
  if (action.type === t.USER_LOGOUT) {
    state = undefined
  }
  return appReducer(state, action)
}

export default rootReducer
