import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import history from './history'

import ApplicationContext from './ApplicationContext'
import { useReducerWithLogger } from './hooks'
import { Header, ScrollTop, Aside, Footer } from './components'
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

const initialState = {
  isAsideOpen: false
}

function reducer (state, action) {
  switch (action.type) {
    case 'SWITCH_ASIDE':
      return {
        isAsideOpen: action.payload
      }
    default:
      throw new Error('Oops:( Wrong action or something else!')
  }
}

function App () {
  const [state, dispatch] = useReducerWithLogger(reducer, initialState)
  return (
    <ApplicationContext.Provider value={{ state, dispatch }}>
      <Router history={history}>
        <ScrollTop />
        <Header />
        <div className='wrapper'>
          <main className='main'>
            <Aside />
            <Switch>
              <Route exact path='/' component={Home} />

              <Route exact path='/news' component={News} />
              <Route path='/news/:id' component={SingleNews} />

              <Route path='/video' component={Video} />

              <Route path='/esc-check' component={ESCCheck} />
              <Route path='/services' component={Services} />
              <Route path='/faq' component={FAQ} />
              <Route path='/contacts' component={Contacts} />
              <Route path='/registration' component={Registration} />

              <Route path='/login' component={Login} />
            </Switch>
          </main>
          <Footer />
        </div>
      </Router>
    </ApplicationContext.Provider>
  )
}

export default App
