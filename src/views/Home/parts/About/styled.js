import styled from 'styled-components'

import { styleguide } from '../../../../constants'

const { colors } = styleguide

const AboutContent = styled.section`
  min-height: calc(100vh - 17.6rem);
  padding: 0;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  &:after {
    display: block;
    content: '';
    position: absolute;
    top: 48%;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: ${colors.alabaster};
  }
`

export {
  AboutContent
}
