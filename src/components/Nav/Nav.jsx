import React from 'react'
import { useLocation } from 'react-router'

import { useWindowDimension } from '../../hooks'
import { Icon } from 'antd'
import { navigations } from '../../constants'
import { ThemeNav } from './styled'

const { menu } = navigations

export default function Nav ({ theme: { theme }, type = 'desktop' }) {
  const { pathname } = useLocation()
  const { width } = useWindowDimension()
  console.log(pathname)
  return (
    <ThemeNav type={type}>
      {menu.map(({ title, route, icon, disabled, exact }) => (
        <ThemeNav.Link
          key={title}
          to={route}
          type={type}
          exact={exact}
          disabled={disabled}
          activeStyle={{ color: theme['@primary-color'] }}
        >
          {width > 1200 &&
            <Icon component={icon} />}
          {title}
        </ThemeNav.Link>
      ))}
    </ThemeNav>
  )
}
