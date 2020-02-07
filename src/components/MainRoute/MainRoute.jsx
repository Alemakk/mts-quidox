import React from 'react'
import { Route } from 'react-router-dom'

import { Header, Footer, MobileMenu, Aside, ScrollTop } from '../'

export default function MainRoute ({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        <>
          <ScrollTop />
          <Header />
          <div className='wrapper'>
            <MobileMenu />
            <Aside />
            <main className='main'>
              <Component {...props} />
            </main>
          </div>
          <Footer />
        </>}
    />
  )
}
