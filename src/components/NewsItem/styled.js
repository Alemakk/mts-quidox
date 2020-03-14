import styled from 'styled-components'
import { linearGradient } from 'polished'

import { styleguide } from '../../constants'

const { colors } = styleguide

const NewsItemBlock = styled.div`
  padding: 5rem 4rem;
  ${linearGradient({
  colorStops: [`${colors.black} 60%`, `${colors.black} 100%`],
  toDirection: '180deg',
  fallback: `${colors.black}`
  })};
  background: url(${({ src }) => src}) center no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  border-radius: 1rem;
  height: 40rem;
  cursor: pointer;
`

export {
  NewsItemBlock
}
