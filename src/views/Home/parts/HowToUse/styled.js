import styled from 'styled-components'

import { styleguide } from '../../../../constants'

const { colors } = styleguide

const HowToUseContent = styled.section`
  background-color: ${colors.alabaster};
`

HowToUseContent.Image = styled.img`
  width: 20rem;
  height: auto;
`

HowToUseContent.Block = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`
export {
  HowToUseContent
}
