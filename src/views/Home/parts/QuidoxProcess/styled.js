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
    height: 60%;
    background-color: ${colors.alabaster};
  }
`

const QuidoxProcessItem = styled.div`
  margin: 1rem 0 4rem;
`

QuidoxProcessItem.Icon = styled(Icon)`
  * {
    width: ${({ small }) => small ? '100%' : ''};
  }
`

export {
  QuidoxProcessContent,
  QuidoxProcessItem
}
