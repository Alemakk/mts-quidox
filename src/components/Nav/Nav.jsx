import React, { useContext } from 'react'

import ApplicationContext from '../../ApplicationContext'
import { useWindowDimension } from '../../hooks'
import { Icon } from '@ant-design/compatible'
import { navigations } from '../../constants'
import { ThemeNav } from './styled'

const { menu } = navigations

export default function Nav ({ theme: { theme }, type = 'desktop' }) {
  const { dispatch } = useContext(ApplicationContext)
  const { width } = useWindowDimension()

  return (
    <ThemeNav type={type}>
      {menu.map(({ title, route, icon, disabled, exact }) => (
        <ThemeNav.Link
          onClick={() => dispatch({ type: 'SWITCH_ASIDE', payload: false })}
          key={title}
          to={route}
          type={type}
          exact={exact}
          disabled={disabled}
          activeStyle={{ color: theme['@primary-color'] }}
        >

          {width > 1350 &&
            <Icon component={icon} />}
          {title}
        </ThemeNav.Link>
      ))}
    </ThemeNav>
  )
}
