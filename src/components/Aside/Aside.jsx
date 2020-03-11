import React from 'react'

import { useWindowDimension } from '../../hooks'
import { ThemeAside } from './styled'
import { navigations } from '../../constants'

const { aside, menu } = navigations

export default function Aside (props) {
  const {
    app: { isAsideVisible }
  } = props

  const { width } = useWindowDimension()
  return (
    <ThemeAside
      style={{ right: isAsideVisible ? '0' : '-100%' }}
    >
      <ThemeAside.Nav>
        {width < 1450 &&
          <>
            {menu.map(({ title, route, disabled }) => (
              <ThemeAside.Link
                key={title}
                to={route}
                disabled={disabled}
              >
                {title}
              </ThemeAside.Link>
            ))}
          </>}

        {aside.map(({ title, route, disabled }) => (
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
