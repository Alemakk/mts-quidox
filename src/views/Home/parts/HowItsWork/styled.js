import styled from 'styled-components'
import ReactPlayer from 'react-player'
import { linearGradient } from 'polished'
import { Text } from '../../../../components'
import { styleguide } from '../../../../constants'

const { colors } = styleguide

const HowItsWorkContent = styled.section``

const Video = styled.div`
  height: 45rem;
  margin: 1rem 0 4rem;
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

Video.Text = styled(Text)`
  position: absolute;
  left: 0;
  bottom: 3rem;
  width: 100%;
  z-index: 5;
`

export {
  HowItsWorkContent,
  Video
}
