import styled from 'styled-components'

import { styleguide } from '../../../../constants'

const { colors } = styleguide

const ESCCheckContent = styled.section`
  background-color: ${colors.alabaster};
`

ESCCheckContent.Block = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export {
  ESCCheckContent
}
