import styled from 'styled-components'

import { styleguide } from '../../../../constants'

const { colors } = styleguide

const QuidoxProcessContent = styled.section`
  position: relative;
    &:after {
    display: block;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 50%;
    background-color: ${colors.alabaster};
  }
`

const QuidoxProcessItem = styled.div`
  margin: 1rem 0 4rem;
`

QuidoxProcessItem.Image = styled.div`
  width: 100%;
  height: ${({ slideItemHeight }) => `${slideItemHeight}px`};
  background: url(${({ src }) => src}) bottom center no-repeat;
  background-size: contain;
`
export {
  QuidoxProcessContent,
  QuidoxProcessItem
}
