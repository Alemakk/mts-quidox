import React, { useEffect, useReducer } from 'react'
import { Route } from 'react-router-dom'
import logger from 'use-reducer-logger'

import api from '../../services/api'
import ApplicationContext from '../../ApplicationContext'
import { notification } from 'antd'
import { Header, ScrollTop, Aside, Footer } from '../'

const initialState = {
  isAsideOpen: false,
  isFetching: false,
  isUserAuthorized: false,
  user: {}
}

function reducer (state, action) {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case 'SWITCH_ASIDE':
      return {
        ...state,
        isAsideOpen: action.payload
      }
    case 'GET_USER_FETCHING':
      return {
        ...state,
        isFetching: action.payload
      }
    case 'GET_USER_SUCCESS':
      return {
        ...state,
        user: action.payload
      }
    case 'USER_AUTHORIZED':
      return {
        ...state,
        isUserAuthorized: action.payload
      }
    default:
      throw new Error('Oops:( Wrong action or something else!')
  }
}

export default function ({ component: Component, ...rest }) {
  const [state, dispatch] = useReducer(logger(reducer), initialState)

  useEffect(() => {
    if (window.localStorage.getItem('authToken')) {
      dispatch({ type: 'USER_AUTHORIZED', payload: true })
    }
  }, [state.isUserAuthorized])

  useEffect(() => {
    const { isUserAuthorized } = state
    if (isUserAuthorized) {
      dispatch({ type: 'GET_USER_FETCHING', payload: true })
      api.user.getUser()
        .then(response => {
          const { success, data, error } = response.data

          if (success) {
            dispatch({ type: 'GET_USER_FETCHING', payload: false })
            dispatch({ type: 'GET_USER_SUCCESS', payload: data })
          } else {
            throw new Error(error)
          }
        })
        .catch(error => {
          dispatch({ type: 'GET_USER_FETCHING', payload: false })
          notification.error({
            message: error.message
          })
        })
    }
  }, [state.isUserAuthorized])

  return (
    <Route
      {...rest}
      render={props => (
        <ApplicationContext.Provider value={{ state, dispatch }}>
          <ScrollTop />
          <Header />
          <Aside />
          <Component {...props} />
          <Footer />
        </ApplicationContext.Provider>
      )}
    />
  )
}
