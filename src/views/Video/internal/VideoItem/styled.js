import styled from 'styled-components'

import { styleguide } from '../../../../constants'

const { sizes } = styleguide

const Video = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction ? 'row-reverse' : 'row'};
  align-items: center;
  flex-wrap: wrap;
`

Video.Player = styled.div`
  flex-basis: 100%;
  height: 45rem;
  border-radius: .6rem;
  overflow: hidden;
  box-shadow: 0px 4px 15px rgba(194, 194, 194, 0.2);
  @media screen and (min-width: ${sizes.laptop}) {
    flex-basis: 50%;
  }
`

Video.Content = styled.div`
  flex-basis: 100%;
  padding: 5rem;
  * {
    text-align: left;
  }
  @media screen and (min-width: ${sizes.laptop}) {
    flex-basis: 50%;
  }
`

export {
  Video
}