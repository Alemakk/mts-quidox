import React from 'react'

const initialState = {
  isMethodsVisible: true,
  registrationType: 'phone',
  activeStep: 0
}

function reducer (state, action) {
  switch (action.type) {
    case 'CHANGE_REGISTRATION_TYPE':
      return {
        ...state,
        registrationType: action.payload
      }
    case 'SWITCH_REGISTRATION_METHODS':
      return {
        ...state,
        isMethodsVisible: action.payload
      }
    case 'CHANGE_ACTIVE_STEP':
      return {
        ...state,
        activeStep: state.activeStep + 1
      }
  }
}

const RegisterContext = React.createContext()

export { RegisterContext, reducer, initialState }
