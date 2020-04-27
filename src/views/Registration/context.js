import React from 'react'

const initialState = {
  isMethodsVisible: true,
  isFetching: false,
  isRegisterEnd: true,
  registrationType: 'phone',
  activeStep: 0,
  data: {}
}

function reducer (state, action) {
  // eslint-disable-next-line default-case
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
    case 'FINISH_REGISTER':
      return {
        ...state,
        isRegisterEnd: true
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
