import React from 'react'
import classNames from 'classnames'

import './Text.scss'

export default function Text ({ children, bolder = false, white = false, small = false, ...rest }) {
  const paragraphClass = classNames({
    text: true,
    'text--bolder': bolder,
    'text--white': white,
    'text--small': small
  })

  return (
    <p className={paragraphClass} {...rest}>{children}</p>
  )
}
