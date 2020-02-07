import React from 'react'
import { Router, Switch } from 'react-router-dom'
import history from './history'

import { MainRoute, SecondaryRoute } from './components'
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
    <>
      <Router history={history}>
        <Switch>
          <MainRoute path='/' component={Home} exact />

          <MainRoute path='/news' component={News} exact />
          <MainRoute path='/news/:id' component={SingleNews} />

          <MainRoute path='/video' component={Video} />

          <MainRoute path='/esc-check' component={ESCCheck} />
          <MainRoute path='/services' component={Services} />
          <MainRoute path='/faq' component={FAQ} />
          <MainRoute path='/contacts' component={Contacts} />
          <MainRoute path='/registration' component={Registration} />

          <SecondaryRoute path='/login' components={Login} />
        </Switch>
      </Router>
    </>
  )
}

export default App
