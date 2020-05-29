import React from 'react'
const initialState = {
  file: {
    isLoaded: false,
    data: {}
  },
  sign: {
    isLoaded: false,
    data: {}
  },
  isCheckSuccess: false
}

function reducer (state, action) {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case 'GET_FILE':
      // eslint-disable-next-line no-case-declarations
      const { type, file } = action.payload
      return {
        ...state,
        [type]: {
          ...state[type],
          data: file
        },
        isCheckSuccess: false
      }
    case 'REMOVE_FILE':
      return {
        ...state,
        [action.payload.type]: {
          ...initialState[action.payload.type]
        },
        isCheckSuccess: false
      }
    case 'SWITCH_FILE_LOAD_STATUS':
      return {
        ...state,
        [action.payload.type]: {
          ...state[action.payload.type],
          isLoaded: true
        }
      }
    case 'TOGGLE_CHECK':
      return {
        ...state,
        isCheckSuccess: true
      }
    default: return new Error('action error')
  }
}

const ESCCheckContext = React.createContext()

export { ESCCheckContext, initialState, reducer }
