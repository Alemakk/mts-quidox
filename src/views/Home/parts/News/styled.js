import styled from 'styled-components'
import { linearGradient } from 'polished'

import { styleguide } from '../../../../constants'

const { colors } = styleguide

const NewsContent = styled.section`
  background-color: ${colors.alabaster};
`

NewsContent.Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  height: 56rem;
  padding: 5rem 4rem;
  border-radius: 1rem;
  ${linearGradient({
    colorStops: [`${colors.black} 0%`, `${colors.black} 20%`],
  toDirection: '180deg'
  })};
  background: url(${({ src }) => src}) no-repeat center;
  background-size: cover;
`

export {
  NewsContent
}
