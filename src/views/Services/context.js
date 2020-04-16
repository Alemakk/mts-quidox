import React from 'react'

const initialState = {
  activeService: '',
  activeStep: 0
}

function reducer (state, action) {
  switch (action.type) {
    case 'CHANGE_ACTIVE_SERVICE':
      return {
        ...state,
        activeService: action.payload
      }
    case 'INCREMENT_ACTIVE_STEP':
      return {
        ...state,
        activeStep: state.activeStep + 1
      }
    default: return new Error('action error')
  }
}

const ServiceContext = React.createContext()

export { initialState, reducer, ServiceContext }
