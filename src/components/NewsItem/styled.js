import styled from 'styled-components'
import { linearGradient } from 'polished'

import { styleguide } from '../../constants'

const { colors } = styleguide

const NewsItemBlock = styled.div`
  padding: 3rem 3rem;
  ${linearGradient({
  colorStops: [`${colors.black} 60%`, `${colors.black} 100%`],
  toDirection: '180deg',
  fallback: `${colors.black}`
  })};
  background: url(${({ src }) => src}) center no-repeat;
  box-shadow: 
          inset 0px 55px 30px -1px rgba(50,50,50,0.5),
        inset 0px -55px 30px -1px rgba(50,50,50,0.5); 
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
