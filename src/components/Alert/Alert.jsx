import React from 'react'

import { ThemeAlert } from './styled'

export default function ({ children, ...rest }) {
  return (
    <ThemeAlert {...rest}>{children}</ThemeAlert>
  )
}