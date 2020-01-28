import React from 'react'

import { ThemeHeading } from './styled'
export default function Heading (props) {
  const {
    theme: { theme },
    brandText = '',
    brandPosition = 'left',
    children,
    ...rest
  } = props
  return (
    <ThemeHeading {...rest}>
      <>
        {brandPosition === 'left'
          ? <>
            <span style={{ color: theme['@primary-color'] }}>{brandText}</span>&nbsp;
            {children}
          </>
          : <>
            {children}&nbsp;
            <span style={{ color: theme['@primary-color'] }}>{brandText}</span>
            </>}
      </>
    </ThemeHeading>
  )
}
