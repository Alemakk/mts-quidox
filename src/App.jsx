import React, { Suspense } from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import history from './history'

import { Loading, Header } from './components'

const Home = React.lazy(() => import('./views/Home'))
const News = React.lazy(() => import('./views/News'))

function App () {
  return (
    <>
      <Header />
      <main className='main'>
        <Suspense fallback={<Loading />}>
          <Router history={history}>
            <Switch>
              <Route path='/' component={Home} exact />
              <Route path='/news' component={News} />
            </Switch>
          </Router>
        </Suspense>
      </main>
    </>
  )
}

export default App
