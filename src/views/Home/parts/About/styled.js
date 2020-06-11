import styled from 'styled-components'

import { styleguide } from '../../../../constants'

const { colors } = styleguide

const AboutContent = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  &:after {
    display: block;
    content: '';
    position: absolute;
    top: 65%;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: ${colors.alabaster};
  }
  @media (min-width: 991px) {
    max-height: 58rem;
  }
`

export {
  AboutContent
}
