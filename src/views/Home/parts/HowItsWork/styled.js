import styled from 'styled-components'
import ReactPlayer from 'react-player'
import { linearGradient } from 'polished'
import { Heading } from '../../../../components'
import { styleguide } from '../../../../constants'

const { colors } = styleguide

const HowItsWorkContent = styled.section``

const Video = styled.div`
  margin: 1rem 0 5rem;
  ${linearGradient({
  colorStops: [`${colors.black} 0%`, `${colors.black} 20%`],
  toDirection: '180deg'
  })};
  border-radius: .6rem;
  overflow: hidden;
  height: ${({ videoHeight }) => `${videoHeight}px`};
  
  .react-player__preview {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
`

Video.Description = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 1rem;
  z-index: 5;
`

export {
  HowItsWorkContent,
  Video
}
