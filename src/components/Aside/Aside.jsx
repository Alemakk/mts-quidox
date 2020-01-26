import React from 'react'

import { ThemeAside } from './styled'
import { navigations } from '../../constants'

const { aside } = navigations

export default function Aside (props) {
  const {
    app: { isAsideVisible }
  } = props
  return (
    <ThemeAside
      style={{ right: isAsideVisible ? '0' : '-100%' }}
    >
      <ThemeAside.Nav>
        {aside.map(({title, route, disabled}) => (
          <ThemeAside.Link
            to={route}
            key={title}
            disabled={disabled}
            activeStyle={{ color: '#000' }}
          >
            {title}
          </ThemeAside.Link>
        ))}
      </ThemeAside.Nav>
    </ThemeAside>
  )
}
