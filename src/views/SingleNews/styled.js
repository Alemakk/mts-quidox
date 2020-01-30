import styled from 'styled-components'
import { linearGradient } from 'polished'

import { styleguide } from '../../constants'

const { colors } = styleguide

const News = styled.div``

News.Content = styled.section`
  padding-top: 2rem;
  position: relative;
`

News.UselessLine = styled.div`
  position: absolute;
  top: 0;
  height: 2rem;
  width: 100%;
  max-width: 45rem;
  &:after {
    display: block;
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    height: .6rem;
    background-color: ${({ color }) => color};
  }
`

News.Banner = styled.div`
  height: calc(100vh - 13.5rem);
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
  padding-bottom: 4rem;
`

export {
  News
}