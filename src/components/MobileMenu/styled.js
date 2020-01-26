import styled from 'styled-components'
import { rgba } from 'polished'

import { styleguide } from '../../constants'

const { colors } = styleguide

const MobileMenuWrapper = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  overflow: hidden;
  background-color: ${rgba(colors.black, 0.8)};
  box-shadow: 10px 0px 50px 0px rgba(152, 152, 152, 0.18);
  z-index: 10;
`

export {
  MobileMenuWrapper
}
