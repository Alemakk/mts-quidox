import React from 'react'
import { Router, Switch } from 'react-router-dom'
import history from './history'

import { PublicRoute } from './components'
import {
  Home,
  News,
  Video,
  SingleNews,
  Registration,
  Contacts,
  FAQ,
  Services,
  ESCCheck,
  Login
} from './views'

function App () {
  return (
    <Router history={history}>
      <div className='wrapper'>
        <main className='main'>
          <Switch>
            <PublicRoute exact path='/' component={Home} />

            <PublicRoute exact path='/news' component={News} />
            <PublicRoute path='/news/:id' component={SingleNews} />

            <PublicRoute path='/video' component={Video} />

            <PublicRoute path='/esc-check' component={ESCCheck} />
            <PublicRoute path='/services' component={Services} />
            <PublicRoute path='/faq' component={FAQ} />
            <PublicRoute path='/contacts' component={Contacts} />
            <PublicRoute path='/registration' component={Registration} />

            <PublicRoute path='/login' component={Login} />
          </Switch>
        </main>
      </div>
    </Router>
  )
}

export default App
