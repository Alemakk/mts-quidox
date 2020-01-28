import styled from 'styled-components'
import { Typography } from 'antd'

import { styleguide } from '../../constants'

const { Title } = Typography
const { sizes } = styleguide

const ThemeHeading = styled(Title)`
  && {
    font-size: 3.2rem;
    margin-top: 0;
    @media screen and (min-width: ${sizes.laptop}) {
      font-size: 6.4rem;
    }
  }
`

export {
  ThemeHeading
}
