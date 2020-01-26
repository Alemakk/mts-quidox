import React from 'react'

import { ThemeText } from './styled'

export default function Text ({ children, ...rest }) {
  return (
    <ThemeText
      {...rest}
    >
      {children}
    </ThemeText>
  )
}
