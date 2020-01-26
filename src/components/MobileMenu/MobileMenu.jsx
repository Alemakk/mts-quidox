import React from 'react'

import { Nav } from '../'

import { MobileMenuWrapper } from './styled'
export default function MobileMenu (props) {
  const {
    handleToggleMenu,
    app: { isMenuVisible },
  } = props
  return (
    <MobileMenuWrapper style={{ left: isMenuVisible ? '0' : '-100%' }}>
      <Nav type='mobile' />
    </MobileMenuWrapper>
  )
}