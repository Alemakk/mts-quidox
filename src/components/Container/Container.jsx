import React from 'react'
import classNames from 'classnames'

import './Container.scss'

export default function ({ small = false, medium = false, children, ...rest }) {
  const containerClass = classNames({
    container: true,
    'container--small': small,
    'container-medium': medium
  })
  return (
    <div className={containerClass} {...rest}>{children}</div>
  )
}
