import React from 'react'
import { Route } from 'react-router-dom'

import ApplicationContext from '../../ApplicationContext'
import { useReducerWithLogger } from '../../hooks'
import { Header, Footer, Aside, ScrollTop } from '../'

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
      throw new Error('Ooops:( Wrong action or smth else!')
  }
}

export default function MainRoute ({ component: Component, ...rest }) {
  const [state, dispatch] = useReducerWithLogger(reducer, initialState)

  return (
    <Route
      {...rest}
      render={props =>
        <>
          <ApplicationContext.Provider value={{ state, dispatch }}>
            <ScrollTop />
            <Header />
            <div className='wrapper'>
              <main className='main'>
                <Aside />
                <Component {...props} />
              </main>
            </div>
            <Footer />
          </ApplicationContext.Provider>
        </>}
    />
  )
}
