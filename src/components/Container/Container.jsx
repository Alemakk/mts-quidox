import React from 'react'

import { ThemeContainer } from './styled'

export default function Container ({ children }) {
  return (
    <ThemeContainer>{children}</ThemeContainer>
  )
}
