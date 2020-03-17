import React from 'react'

import history from '../../history'
import FormContext from './context'
import { images } from '../../resources'
import { useImage, useReducerWithLogger } from '../../hooks'
import { Text, Heading, Button } from '../../components'
import { LoginForm } from './internal'
import { LoginContent } from './styled'

const { login } = images

const initialState = {
  isLogin: true,
  isFetching: false,
  error: null
}

function reducer (state, action) {
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

export default function ({ theme: { theme } }) {
  const { src } = useImage(login)
  const [state, dispatch] = useReducerWithLogger(reducer, initialState)

  const { isLogin } = state
  return (
    <LoginContent>
      <LoginContent.Aside>
        <LoginContent.AsideContent>
          <img style={{ maxWidth: 320 }} src={src} alt='Login Picture' />

          <LoginContent.Description>
            <Text style={{ fontWeight: 500, textAlign: 'left' }}>
              Благодаря сервису <span style={{ color: theme['@primary-color'] }}>МТС</span>&nbsp;
              <span style={{ color: theme['@secondary-color'] }}>Quidox</span>&nbsp;
              Вы сможете с легкостью обмениваться
              электронными документами с ЭЦП.
              Доставка происходит мгновенно!
            </Text>

            <Button
              type='secondary'
              onClick={() => history.push('/')}
              style={{ marginTop: '5rem' }}
              ghost
            >
              Подробнее о сервисе
            </Button>
          </LoginContent.Description>
        </LoginContent.AsideContent>
      </LoginContent.Aside>

      <LoginContent.Main>
        <Heading level={3}>Войти в МТС Quidox</Heading>
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
