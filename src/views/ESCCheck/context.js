import React from 'react'
const initialState = {
  types: ['file', 'sign'],
  file: {
    isLoaded: false,
    defaultText: 'Перетяните подписанный документ (.pdf/.doc/.zip файл)',
    data: {}
  },
  sign: {
    isLoaded: false,
    defaultText: 'Перетяните подпись ЭЦП (.sig файл)',
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
    case 'INIT_LOADING':
      return {
        ...state,
        isDropped: action.payload
      }
    default: return new Error('action error')
  }
}

const ESCCheckContext = React.createContext()

export { ESCCheckContext, initialState, reducer }
