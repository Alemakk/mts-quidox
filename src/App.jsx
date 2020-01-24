import React, { Suspense } from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import history from './history'

import { Home, News } from './views'
// import { Loading } from './components'

// const HomePage = React.lazy(() => import(Home))
// const NewsPage = React.lazy(() => import(News))

function App () {
  return (
    <div className='App'>
      <Router history={history}>
        <Switch>
          <Route path='/' component={Home} />
          <Route path='/news' component={News} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
