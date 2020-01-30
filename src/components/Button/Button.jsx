import React from 'react'

import { ThemeButton } from './styled'

export default function Button (props) {
  const {
    theme: { theme },
    type = 'primary',
    ghost = false,
    children,
    ...rest } = props

  return (
    <ThemeButton
      color={type === 'primary' ? theme['@primary-color'] : theme['@secondary-color']}
      ghost={ghost ? 1 : 0}
      {...rest}
    >
      {children}
    </ThemeButton>
  )
}
