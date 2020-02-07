import styled from 'styled-components'
import ReactPlayer from 'react-player'
import { linearGradient } from 'polished'
import { Heading } from '../../../../components'
import { styleguide } from '../../../../constants'

const { colors } = styleguide

const HowItsWorkContent = styled.section``

const Video = styled.div`
  height: 75rem;
  margin: 1rem 0 8rem;
  ${linearGradient({
  colorStops: [`${colors.black} 0%`, `${colors.black} 20%`],
  toDirection: '180deg'
  })};
  border-radius: .6rem !important;
  overflow: hidden;
`

Video.Slide = styled(ReactPlayer)`
  overflow: hidden;
`

Video.Text = styled(Heading)`
  position: absolute;
  left: 4rem;
  bottom: 3rem;
  width: 100%;
  z-index: 5;
  margin: 0 !important;
`

export {
  HowItsWorkContent,
  Video
}
