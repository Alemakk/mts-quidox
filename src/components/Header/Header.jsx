import React, { useContext } from 'react'

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

  const { width } = useWindowDimension()
  const { state: { user }, dispatch } = useContext(ApplicationContext)

  return (
    <ThemeHeader>
      <Container>
        <ThemeHeader.Bottom>
          <ThemeHeader.AlignBlock>
            <ThemeHeader.Logo
              src={logo}
              onClick={() => history.push('/')}
            />
          </ThemeHeader.AlignBlock>

          {width > 1350 &&
            <Nav />}
          <ThemeHeader.AlignBlock>
            {Object.keys(user).length
              ? <ThemeHeader.Avatar
                color={theme['@primary-color']}
              >
                {user.name.charAt(0)}
              </ThemeHeader.Avatar>
              : <Button
                type='secondary'
                onClick={() => history.push('/login')}
                ghost
              >
                Войти
              </Button>}
            <BurgerButton onClick={() => dispatch({ type: 'SWITCH_ASIDE', payload: true })} />
          </ThemeHeader.AlignBlock>
        </ThemeHeader.Bottom>
      </Container>
    </ThemeHeader>
  )
}
