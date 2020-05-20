import styled from 'styled-components'

import { styleguide } from '../../constants'

const { colors } = styleguide

const CarouselButton = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 100%;
  background-color: ${colors.white};
  color: ${colors.black};
  font-size: 3rem;
  display: flex !important;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 8px rgba(125, 125, 125, 0.15);
  z-index: 5;
  top: 100%;
  &:hover {
    * {
      fill: ${({ color }) => color};
    }
  }
  &:before,
  &:after {
    display: none;
  }
  &.slick-next {
    right: 40%;
  }
  &.slick-prev {
    left: 40%;
  }
`

export {
  CarouselButton
}
