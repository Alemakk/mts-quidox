import React from 'react'
import classNames from 'classnames'

import { ThemeButton } from './styled'

export default function Button (props) {
  const {
    theme: { theme },
    type = 'primary',
    ghost = false,
    children,
    ...rest
  } = props

  const buttonClasses = classNames('button', {
    ghost: ghost,
    ghost_primary: ghost && type === 'primary',
    ghost_secondary: ghost && type === 'secondary',
    button_primary: type === 'primary',
    button_secondary: type === 'secondary'
  })

  return (
    <ThemeButton
      className={buttonClasses}
      primaryColor={theme['@primary-color']}
      secondaryColor={theme['@secondary-color']}
      {...rest}
    >
      {children}
    </ThemeButton>
  )
}
