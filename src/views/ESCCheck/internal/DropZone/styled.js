import styled from 'styled-components'

import { styleguide } from '../../../../constants'

const { colors } = styleguide

const LoadStatus = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: .2rem;
  will-change: transform;
  transition: .1s linear;
  &:after {
    display: block;
    content: '';
    position: absolute;
    left: 0;
    height: 100%;
    width: ${({ width }) => `${width}%`};
    background-color: ${colors.red};
  }
`

export default LoadStatus
