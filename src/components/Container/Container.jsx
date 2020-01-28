import React from 'react'

import { ThemeContainer } from './styled'

export default function Container ({ children, ...rest }) {
  return (
    <ThemeContainer {...rest}>{children}</ThemeContainer>
  )
}
