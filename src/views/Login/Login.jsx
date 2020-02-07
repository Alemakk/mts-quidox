import React from 'react'

import { images } from '../../resources'
import { useImage } from '../../hooks'
import { Text } from '../../components'
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
          </LoginContent.Description>
        </LoginContent.AsideContent>
      </LoginContent.Aside>
    </LoginContent>
  )
}
