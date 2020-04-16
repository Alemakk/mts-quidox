import React from 'react'
import { Route } from 'react-router-dom'

import history from '../../history'
import { images } from '../../resources'
import { Text, Container } from '../../components'
import './SecondaryRoute.scss'

const { logo } = images

export default function ({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props => (
        <div className='secondary-route'>
          <header className='header-secondary'>
            <div className='header-secondary_top'>
              <Text white>Пакет услуг "Легкий" <span style={{ color: '#000' }}>БЕСПЛАТНО первые 90 дней! </span></Text>
            </div>
            <Container>
              <div className='header-secondary_bottom'>
                <img src={logo} alt='logo' onClick={() => history.push('/')}/>
              </div>
            </Container>
          </header>
          <Component {...props} />
        </div>
      )}
    />
  )
}