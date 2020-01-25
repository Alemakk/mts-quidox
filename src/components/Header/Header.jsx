import React from 'react'

import history from '../../history'
import { Container } from '../'
import { ThemeHeader } from './styled'

export default function Header (props) {
  const { theme: { theme } } = props

  return (
    <ThemeHeader>
      <ThemeHeader.Top
        color={theme['@primary-color']}
      >
        <Container>
          <ThemeHeader.Text>
            В mtsquidoх.by появилась новая функциональность. Теперь вы можете
            <span> подключить ЭЦП к своему мобильному телефону или планшету!</span>
          </ThemeHeader.Text>
        </Container>
      </ThemeHeader.Top>
      <Container>
        <ThemeHeader.Bottom>
          <ThemeHeader.Logo
            src={theme['@logo-link']}
            onClick={() => history.push('/')}
          />
        </ThemeHeader.Bottom>
      </Container>
    </ThemeHeader>
  )
}
