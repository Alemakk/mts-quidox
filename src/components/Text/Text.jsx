import React from 'react'
import classNames from 'classnames'

import './Text.scss'

export default function Text (props) {
  const { children, bolder = false, white = false, gray = false, small = false, ...rest } = props
  const paragraphClass = classNames({
    text: true,
    'text--bolder': bolder,
    'text--white': white,
    'text--small': small,
    'text--gray': gray
  })

  return (
    <p className={paragraphClass} {...rest}>{children}</p>
  )
}
