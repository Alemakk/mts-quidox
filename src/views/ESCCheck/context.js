import React from 'react'
const initialState = {
  file: {
    isLoaded: false,
    data: {}
  },
  sign: {
    isLoaded: false,
    data: {}
  }
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
        }
      }
    case 'REMOVE_FILE':
      return {
        ...state,
        [action.payload.type]: {
          ...initialState[action.payload.type]
        }
      }
    case 'SWITCH_FILE_LOAD_STATUS':
      return {
        ...state,
        [action.payload.type]: {
          ...state[action.payload.type],
          isLoaded: true
        }
      }
    default: return new Error('action error')
  }
}

const ESCCheckContext = React.createContext()

export { ESCCheckContext, initialState, reducer }