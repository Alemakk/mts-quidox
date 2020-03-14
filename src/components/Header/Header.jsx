import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom'

import ApplicationContext from '../../ApplicationContext'
import history from '../../history'
import { images } from '../../resources'
import { useWindowDimension } from '../../hooks'
import { Container, Nav, Button } from '../'
import { ThemeHeader } from './styled'

import './Header.scss'

const { logo } = images

function BurgerButton ({ ...rest }) {
  return (
    <div className='burger' {...rest} />
  )
}
export default function Header (props) {
  const {
    theme: { theme }
  } = props

  const { path } = useLocation()
  const { width } = useWindowDimension()
  const { dispatch } = useContext(ApplicationContext)

  const isSecondaryRoute = path === '/login'
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
            <ThemeHeader.Logo
              src={logo}
              onClick={() => history.push('/')}
            />
          </ThemeHeader.AlignBlock>

          {!isSecondaryRoute &&
            <>
              {width > 1350 &&
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

              <BurgerButton onClick={() => isSecondaryRoute ? null : dispatch({ type: 'SWITCH_ASIDE', payload: true })} />
            </ThemeHeader.AlignBlock>}
        </ThemeHeader.Bottom>
      </Container>
    </ThemeHeader>
  )
}
