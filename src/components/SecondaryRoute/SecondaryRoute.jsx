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
              <Text white>Воспользуйтесь возможностями услуги МТС SmartDoc Лайт со 100% скидкой&nbsp; <span style={{ color: '#000' }}>первые 30 дней</span></Text>
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