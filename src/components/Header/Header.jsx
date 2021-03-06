import React, { useState, useContext } from 'react'

import ApplicationContext from '../../ApplicationContext'
import history from '../../history'
import { useWindowDimension } from '../../hooks'
import { Container, Nav, Button } from '../'
import { UserActions } from './internal'
import { ThemeHeader } from './styled'

import './Header.scss'

function Logo () {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='262'
      height='44'
      fill='none'
      viewBox='0 0 262 44'
    >
      <path
        fill='#E30611'
        d='M11.645 10.84c-2.432 0-5.309 2.329-7.706 6.268C1.473 21.183 0 26.218 0 30.602 0 37.007 3.596 43.48 11.645 43.48S23.29 37.007 23.29 30.602c0-4.384-1.473-9.419-3.939-13.494-2.397-3.94-5.274-6.268-7.706-6.268zM74.563 20.465h8.151V41.7h8.734V20.465h8.151v-7.877H74.562v7.877zM118.266 20.465h12.809v-7.877h-12.809c-11.782 0-18.05 5.857-18.05 14.556 0 8.7 6.302 14.556 18.05 14.556h12.809v-7.877h-12.809c-5.446 0-9.042-1.952-9.042-6.713 0-4.692 3.562-6.645 9.042-6.645zM56.786 12.588l-4.658 17.399-4.658-17.4H32.023V41.7h8.768V18.034L47.129 41.7h10L63.5 18v23.7h8.734V12.588H56.786zM152.9 21.431c0-5.622-8.352-3.1-8.352-5.478 0-1.095.785-1.323 1.984-1.323 1.096 0 1.82.228 1.882 1.365h4.237c-.062-3.287-2.46-4.569-6.119-4.569s-5.953 1.282-5.953 4.569c0 6.119 8.331 3.204 8.331 5.726 0 1.157-.848 1.385-2.191 1.385-1.261 0-2.088-.29-2.13-1.737h-4.238c.124 3.577 2.481 4.941 6.368 4.941 3.886 0 6.181-1.282 6.181-4.879zm8.677-9.695h-6.719V26h3.825V15.21l2.17 9.095h4.404l2.17-9.096V26h4.135V11.736h-6.202l-1.902 8.166-1.881-8.166zm15.829 0L173.003 26h3.763l.806-2.729h5.044l.827 2.729h4.362l-4.404-14.264h-5.995zm2.688 3.163l1.592 5.271h-3.184l1.592-5.271zm21.588 1.53c0-3.06-2.005-4.693-5.374-4.693h-7.05V26h4.135v-4.755h1.964L197.569 26h4.341l-2.502-5.395c1.448-.745 2.274-2.15 2.274-4.176zm-4.237.248c0 .785-.476 1.26-1.406 1.26h-2.646v-2.893h2.646c.971 0 1.406.454 1.406 1.22v.413zm17.933-1.427v-3.514h-12.755v3.514h4.3V26h4.135V15.25h4.32zm7.344 7.236h-1.551V15.25h1.551c2.046 0 3.1.62 3.1 2.688v1.819c0 2.253-1.054 2.729-3.1 2.729zm0 3.514c4.692 0 7.338-1.612 7.338-7.132 0-5.478-2.646-7.132-7.338-7.132h-5.685V26h5.685zm23.455-7.339c0-5.56-2.646-7.235-7.339-7.235-4.693 0-7.339 1.675-7.339 7.235 0 5.933 2.646 7.65 7.339 7.65 4.693 0 7.339-1.717 7.339-7.65zm-4.238 1.2c0 2.625-1.055 3.142-3.101 3.142-2.047 0-3.101-.517-3.101-3.143v-2.026c0-2.397 1.054-3.1 3.101-3.1 2.046 0 3.101.703 3.101 3.1v2.026zm12.471 6.45c3.886 0 6.243-1.448 6.656-5.293h-4.238c-.227 1.592-1.116 1.985-2.418 1.985-1.489 0-2.543-.393-2.543-2.895v-2.522c0-2.501 1.096-2.852 2.543-2.852 1.323 0 2.232.33 2.398 1.943h4.238c-.352-3.887-2.75-5.251-6.636-5.251-4.238 0-6.781 1.799-6.781 7.38 0 5.809 2.543 7.504 6.781 7.504z'
      />
    </svg>
  )
}

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

  const [isUserActionsVisible, setUserActionsVisible] = useState(false)

  return (
    <ThemeHeader>
      <Container>
        <ThemeHeader.Bottom>
          <ThemeHeader.AlignBlock>
            <ThemeHeader.Logo
              component={Logo}
              onClick={() => history.push('/')}
            />
          </ThemeHeader.AlignBlock>

          {width > 1350 &&
            <Nav />}
          <ThemeHeader.AlignBlock>
            {Object.keys(user).length
              ? <div style={{ position: 'relative' }}>
                <ThemeHeader.Avatar
                  onClick={() => setUserActionsVisible(!isUserActionsVisible)}
                  color={theme['@primary-color']}
                >
                  {user.name.charAt(0)}
                </ThemeHeader.Avatar>
                {isUserActionsVisible && <UserActions />}
              </div>
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
