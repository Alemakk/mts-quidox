import styled from 'styled-components'

import { styleguide } from '../../../../constants'

const { colors } = styleguide

const AboutContent = styled.section`
  min-height: calc(100vh - 14.875rem);
  padding-top: 5rem;
  position: relative;
  &:after {
    display: block;
    content: '';
    position: absolute;
    top: 57%;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: ${colors.alabaster};
  }
`

export {
  AboutContent
}
