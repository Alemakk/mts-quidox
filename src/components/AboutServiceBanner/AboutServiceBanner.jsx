import React from 'react'

import history from '../../history'
import { useImage } from '../../hooks'
import { images } from '../../resources'
import Banner from './styled'
import { Button, Text } from '../index'

const { login } = images

export default function ({ theme: { theme }, ...rest }) {
  const { src } = useImage(login)
  return (
    <Banner {...rest}>
      <Banner.Content>
        <Banner.Image src={src} alt='Banner image' />

        <Text style={{ fontWeight: 500, textAlign: 'left' }}>
          Благодаря сервису <span style={{ color: theme['@primary-color'] }}>МТС</span>&nbsp;
          <span style={{ color: theme['@secondary-color'] }}>SmartDoc</span>&nbsp;
          Вы сможете с легкостью обмениваться
          электронными документами с ЭЦП.
          Доставка происходит мгновенно!
        </Text>

        <Button
          type='secondary'
          onClick={() => history.push('/')}
          style={{ marginTop: '3rem' }}
          ghost
        >
          Подробнее о сервисе
        </Button>
      </Banner.Content>
    </Banner>
  )
}
