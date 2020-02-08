import React from 'react'

import history from '../../history'
import { images } from '../../resources'
import { Icon } from 'antd'
import { useWindowDimension } from '../../hooks'
import { Container, Nav, Button } from '../'
import { ThemeHeader } from './styled'

const { logo } = images

export default function Header (props) {
  const {
    handleToggleMenu,
    handleToggleAside,
    app: { isMenuVisible, isAsideVisible },
    theme: { theme },
    isSecondaryRoute = false
  } = props
  const { width } = useWindowDimension()

  return (
    <ThemeHeader>
      <ThemeHeader.Top
        color={theme['@primary-color']}
      >
        <Container>
          <ThemeHeader.Text>
            {isSecondaryRoute ? 'Пакет услуг "Легкий"' : 'В mtsquidoх.by появилась новая функциональность. Теперь вы можете'}
            <span> {isSecondaryRoute ? ' БЕСЛПАТНО первые 90 дней!' : ' подключить ЭЦП к своему мобильному телефону или планшету!'}</span>
          </ThemeHeader.Text>
        </Container>
      </ThemeHeader.Top>
      <Container>
        <ThemeHeader.Bottom>
          <ThemeHeader.AlignBlock>
            {width < 0 &&
              <Icon
                onClick={() => handleToggleMenu(!isMenuVisible)}
                type={isMenuVisible ? 'close' : 'menu'}
                style={{ fontSize: '2rem', marginRight: width < 1200 ? '3rem' : '6rem' }}
              />}

            <ThemeHeader.Logo
              src={logo}
              onClick={() => history.push('/')}
            />
          </ThemeHeader.AlignBlock>

          {!isSecondaryRoute &&
            <>
              {width > 1450 &&
                <Nav />}
            </>}

          {!isSecondaryRoute &&
            <ThemeHeader.AlignBlock>
              <Button
                type='secondary'
                onClick={() => history.push('/login')}
                ghost
              >Войти
              </Button>

              <Icon
                style={{ fontSize: '2rem', marginLeft: width < 1200 ? '3rem' : '6rem' }}
                onClick={() => handleToggleAside(!isAsideVisible)}
                type={isAsideVisible ? 'close' : 'menu'}
              />
            </ThemeHeader.AlignBlock>}
        </ThemeHeader.Bottom>
      </Container>
    </ThemeHeader>
  )
}
