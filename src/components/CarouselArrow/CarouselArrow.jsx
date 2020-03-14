import React from 'react'

import { Icon } from '@ant-design/compatible'
import { homeIcons } from '../../resources'
import { CarouselButton } from './styled'

const { arrow } = homeIcons

export default function CarouselArrow (props) {
  const {
    theme: { theme },
    direction = 'left',
    ...rest
  } = props
  return (
    <CarouselButton {...rest} color={theme['@primary-color']}>
      <Icon component={arrow} style={{ transform: direction === 'right' && 'rotate(180deg)' }} />
    </CarouselButton>
  )
}
