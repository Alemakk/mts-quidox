import React from 'react'
import { Route } from 'react-router-dom'

import { Header } from '../'
export default function SecondaryRoute ({ components: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        <>
          <Header isSecondaryRoute />
          <div className='wrapper-secondary'>
            <Component {...props} />
          </div>
        </>}
    />
  )
}
