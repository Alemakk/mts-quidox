import React from 'react'

const initialState = {
  isMethodsVisible: false,
  isFetching: false,
  registrationType: 'phone',
  activeStep: 1,
  data: {}
}

function reducer (state, action) {
  switch (action.type) {
    case 'FETCHING_INIT':
      return {
        ...state,
        isFetching: action.payload
      }
    case 'SAVE_FORM_DATA':
      return {
        ...state,
        data: {
          ...state.data,
          ...action.payload
        }
      }
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
