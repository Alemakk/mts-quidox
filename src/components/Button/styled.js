import styled from 'styled-components'
import { styleguide } from '../../constants'

const { sizes } = styleguide

const ThemeButton = styled.button`
  && {
    border: .1rem solid transparent;
    border-color: ${({ color }) => color};
    background-color: ${({ color }) => color};
    font-size: 1.8rem;
    font-weight: bold;
    padding: 1.5rem 6rem;
    height: auto;
    @media screen and (max-width: ${sizes.laptop}) {
      padding: 1rem 2rem;
    }
  }
`

export {
  ThemeButton
}
