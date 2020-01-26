import React from 'react'

import { ThemeButton } from './styled';

export default function Button ({ theme: { theme }, children, ...rest }) {
  return (
    <ThemeButton color={theme['@primary-color']} {...rest}>{children}</ThemeButton>
  )
}