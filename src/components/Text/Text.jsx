import React from 'react'
import classNames from 'classnames'

import './Text.scss'

export default function Text ({ children, bolder = false, ...rest }) {
  const paragraphClass = classNames({
    text: true,
    'text--bolder': bolder
  })

  return (
    <p className={paragraphClass} {...rest}>{children}</p>
  )
}
