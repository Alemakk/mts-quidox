import React, { Suspense } from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import history from './history'

import { Loading, Header, Footer, MobileMenu, Aside, ScrollTop } from './components'

const Home = React.lazy(() => import('./views/Home'))
const News = React.lazy(() => import('./views/News'))

function App () {
  return (
    <>
      <Router history={history}>
        <ScrollTop />
        <Header />
        <div className='wrapper'>
          <MobileMenu />
          <Aside />
          <main className='main'>
            <Suspense fallback={<Loading />}>
              <Switch>
                <Route path='/' component={Home} />
                <Route path='/news' component={News} />
              </Switch>
            </Suspense>
          </main>
        </div>
        <Footer />
      </Router>
    </>
  )
}

export default App
