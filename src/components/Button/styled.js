import styled from 'styled-components'
import { Button } from 'antd'

import { styleguide } from '../../constants'

const { sizes } = styleguide

const ThemeButton = styled(Button)`
  && {
    font-size: 1.8rem;
    font-weight: bold;
    padding: 1.5rem 6rem;
    height: auto;
    background-color: ${({ color }) => color};
    border-color: ${({ color }) => color};
    
    @media screen and (max-width: ${sizes.laptop}) {
      padding: 1rem 2rem;
    }
  }
`

export {
  ThemeButton
}
