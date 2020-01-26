import styled from 'styled-components'
import { Typography } from 'antd'
import { styleguide } from '../../constants'

const { Text } = Typography
const { colors, sizes } = styleguide

const ThemeText = styled(Text)`
  && {
    font-size: 2.4rem;
  }
`

export {
  ThemeText
}