import React from 'react'
import Slider from 'react-slick'

import { ThemeHeading } from './styled'
export default function Heading (props) {
  const {
    theme: { theme },
    brandText = '',
    brandPosition = 'left',
    space = true,
    children,
    ...rest
  } = props
  return (
    <ThemeHeading {...rest}>
      {brandText
        ? <>
          {space
            ? <>
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
            : <>
              {brandPosition === 'left'
                ? <>
                  <span style={{ color: theme['@primary-color'] }}>{brandText}</span>
                  {children}
                  </>
                : <>
                  {children}
                  <span style={{ color: theme['@primary-color'] }}>{brandText}</span>
                  </>}
              </>}
          </>
        : <>{children}</>}
    </ThemeHeading>
  )
}
