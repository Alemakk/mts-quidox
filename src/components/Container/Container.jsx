import React from 'react'

import { ThemeContainer } from './styled'

export default function Container ({ small = false, children, ...rest }) {
  return (
    <ThemeContainer small={small ? 1 : 0} {...rest}>{children}</ThemeContainer>
  )
}
