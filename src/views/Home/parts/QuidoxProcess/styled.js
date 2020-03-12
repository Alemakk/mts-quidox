import styled from 'styled-components'
import { Icon } from 'antd'

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
  //width: 100%;
  width: ${({ slideItemWidth }) => `${slideItemWidth}px`};
`

QuidoxProcessItem.Image = styled.div`
  width: 100%;
  height: ${({ slideItemHeight }) => `${slideItemHeight}px`};
  background: url(${({ src }) => src}) center no-repeat;
  background-size: contain;
`

export {
  QuidoxProcessContent,
  QuidoxProcessItem
}
