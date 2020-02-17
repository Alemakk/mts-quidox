import styled from 'styled-components'
import { rgba } from 'polished'

import { styleguide } from '../../constants'

const { colors } = styleguide

const ThemeAlert = styled.div`
  width: 100%;
  background-color: ${rgba(colors.red, 0.1)};
  padding: 0.5rem 1rem;
  color: ${colors.red};
  line-height: 2.8rem;
  text-align: center;
`

export {
  ThemeAlert
}
