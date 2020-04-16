import styled from 'styled-components'

import { styleguide } from '../../constants'

const { colors } = styleguide

const ServicesContent = styled.section`
  background-color: ${colors.white};
  min-height: calc(100vh - 13.4rem);
`

export {
  ServicesContent
}
