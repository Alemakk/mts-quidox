import React from 'react'

import history from '../../history'
import { Icon } from 'antd'
import { useWindowDimension } from '../../hooks'
import { Container, Nav, Button } from '../'
import { ThemeHeader } from './styled'

export default function Header (props) {
  const {
    handleToggleMenu,
    handleToggleAside,
    app: { isMenuVisible, isAsideVisible },
    theme: { theme }
  } = props
  const { width } = useWindowDimension()

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
          <ThemeHeader.AlignBlock>
            {width < 1200 &&
              <Icon
                onClick={() => handleToggleMenu(!isMenuVisible)}
                type={isMenuVisible ? 'close' : 'menu'}
                style={{ fontSize: '2rem', marginRight: width < 1200 ? '3rem' : '6rem' }}
              />}

            <ThemeHeader.Logo
              src={theme['@logo-link']}
              alt='Brand Logo'
              onClick={() => history.push('/')}
            />
          </ThemeHeader.AlignBlock>

          {width > 1200 &&
            <Nav />}

          <ThemeHeader.AlignBlock>
            <Button
              ghost
              type='secondary'
            >Войти</Button>

            <Icon
              style={{ fontSize: '2rem', marginLeft: width < 1200 ? '3rem' : '6rem' }}
              onClick={() => handleToggleAside(!isAsideVisible)}
              type={isAsideVisible ? 'close' : 'menu'}
            />
          </ThemeHeader.AlignBlock>
        </ThemeHeader.Bottom>
      </Container>
    </ThemeHeader>
  )
}
