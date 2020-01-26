import * as t from '../types'

const initialState = {
  isMenuVisible: false,
  isAsideVisible: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case t.TOGGLE_MENU:
      return {
        ...state,
        isMenuVisible: action.payload,
        isAsideVisible: false
      }
    case t.TOGGLE_ASIDE:
      return {
        ...state,
        isAsideVisible: action.payload,
        isMenuVisible: false
      }
    default: return state
  }
}