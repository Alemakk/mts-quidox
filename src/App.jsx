import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import history from './history'

import { MainRoute } from './components'
import {
  Home,
  News,
  Video,
  SingleNews,
  Registration,
  Contacts,
  FAQ,
  Services,
  ESCCheck
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
          <Route path='/registration' component={Registration} />
        </Switch>
      </Router>
    </>
  )
}

export default App
