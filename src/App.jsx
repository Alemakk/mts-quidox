import React, { Suspense } from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import history from './history'

import { Loading, Header, Footer, MobileMenu, Aside, ScrollTop } from './components'

const Home = React.lazy(() => import('./views/Home'))
const News = React.lazy(() => import('./views/News'))
const Video = React.lazy(() => import('./views/Video'))
const SingleNews = React.lazy(() => import('./views/SingleNews'))
const Registration = React.lazy(() => import('./views/Registration'))
const Contacts = React.lazy(() => import('./views/Contacts'))
const FAQ = React.lazy(() => import('./views/FAQ'))

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
                <Route path='/' component={Home} exact />

                <Route path='/news' component={News} />
                <Route path='/news/:id' component={SingleNews} />

                <Route path='/video' component={Video} />

                <Route path='/faq' component={FAQ} />
                <Route path='/contacts' component={Contacts} />
                <Route path='/registration' component={Registration} />
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
