import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import posed from 'react-pose'

import ApplicationContext from '../../ApplicationContext'
import { Icon } from 'antd'
import { useWindowDimension } from '../../hooks'
import { navigations } from '../../constants'

import './Aside.scss'

const { aside, menu } = navigations

const SideBarList = posed.div({
  open: {
    x: '0',
    delayChildren: 200,
    staggerChildren: 50
  },
  closed: { x: '100%', delay: 500 }
})

function Close ({ ...rest }) {
  return (
    <div className='close' {...rest} />
  )
}

const SideBarItem = posed.li({
  open: { y: 0, opacity: 1 },
  closed: { y: 20, opacity: 0 }
})

export default function () {
  const { width } = useWindowDimension()
  const { state, dispatch } = useContext(ApplicationContext)
  const { isAsideOpen } = state
  return (
    <SideBarList className='aside' pose={isAsideOpen ? 'open' : 'closed'}>
      <Close onClick={() => dispatch({ type: 'SWITCH_ASIDE', payload: false })} />
      <ul className='aside__list'>
        {width < 1450 &&
          <>
            {menu.map(({ title, route, disabled, exact }) => (
              <SideBarItem
                className='aside__item'
                key={title}
              >
                <NavLink
                  to={route}
                  disabled={disabled}
                  activeStyle={{ color: '#E30611' }}
                  exact={exact}
                >
                  {title}
                </NavLink>
              </SideBarItem>
            ))}
          </>}

        {aside.map(({ title, route, disabled, exact }) => (
          <SideBarItem
            key={title}
            className='aside__item'
          >
            <NavLink
              to={route}
              disabled={disabled}
              exact={exact}
              activeStyle={{ color: '#E30611' }}
            >
              {title}
            </NavLink>
          </SideBarItem>
        ))}
      </ul>
    </SideBarList>
  )
}
