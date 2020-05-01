import React, { useReducer } from 'react'
import logger from 'use-reducer-logger'

import FormContext from './context'
import { Text, Heading, AboutServiceBanner } from '../../components'
import { LoginForm } from './internal'
import { LoginContent } from './styled'

const initialState = {
  isLogin: true,
  isFetching: false,
  error: null
}

function reducer (state, action) {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case 'CHANGE_FORM':
      return {
        ...state,
        error: null,
        isLogin: action.payload
      }
    case 'LOGIN_INIT':
      return {
        ...state,
        isFetching: action.payload
      }
    case 'LOGIN_ERROR':
      return {
        ...state,
        isFetching: false,
        error: action.payload
      }
  }
}

export default function () {
  const [state, dispatch] = useReducer(logger(reducer), initialState)

  const { isLogin } = state
  return (
    <LoginContent>
      <AboutServiceBanner />
      <LoginContent.Main>
        <Heading level={3}>Войти в SmartDoc</Heading>
        <Text>Обмен электронными документами с ЭЦП</Text>
        <LoginContent.FormWrapp>
          <FormContext.Provider value={{ state, dispatch }}>
            {isLogin
              ? <LoginForm />
              : '123'}
          </FormContext.Provider>
        </LoginContent.FormWrapp>
      </LoginContent.Main>
    </LoginContent>
  )
}
