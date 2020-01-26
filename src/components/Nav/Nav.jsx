import React from 'react'

import { useWindowDimension } from '../../hooks'
import { Icon } from 'antd'
import { navigations } from '../../constants'
import { ThemeNav } from './styled'

const { menu } = navigations

export default function Nav ({ theme: { theme }, type='desktop' }) {
  const { width } = useWindowDimension()
  return (
    <ThemeNav type={type}>
      {menu.map(({ title, route, icon, disabled }) => (
        <ThemeNav.Link
          key={title}
          to={route}
          type={type}
          disabled={disabled}
          activeStyle={{ color: theme['@primary-color'] }}
        >
          {width > 1200 &&
            <Icon component={icon}/>}
          {title}
        </ThemeNav.Link>
        ))}
    </ThemeNav>
  )
}
