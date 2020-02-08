import React from 'react'

import history from '../../history'
import { images } from '../../resources'
import { useImage } from '../../hooks'
import { Text, Heading, Button } from '../../components'
import { LoginForm } from './internal'
import { LoginContent } from './styled'

const { login } = images
export default function Login ({ theme: { theme } }) {
  const { src } = useImage(login)

  return (
    <LoginContent>
      <LoginContent.Aside>
        <LoginContent.AsideContent>
          <img style={{ maxWidth: 320 }} src={src} alt='Login Image' />

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
          <LoginForm />

          <LoginContent.Footer>
            <Text style={{ color: '#000', textAlign: 'left' }}>Нет аккаунта?</Text>
            <Button style={{ marginTop: 30 }} type='secondary' ghost>Зарегестрироваться</Button>
          </LoginContent.Footer>
        </LoginContent.FormWrapp>
      </LoginContent.Main>
    </LoginContent>
  )
}
