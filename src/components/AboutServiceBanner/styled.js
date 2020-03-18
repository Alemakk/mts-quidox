import styled from 'styled-components'

import { styleguide } from '../../constants'

const { colors } = styleguide

const Banner = styled.div`
  width: 100%;
  flex-basis: 40%;
  background-color: ${colors.white};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 5rem 2rem 2rem;
`

Banner.Content = styled.div`
  max-width: 45rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

Banner.Image = styled.img`
  width: 100%;
  max-width: 32rem;
  margin-right: auto;
  margin-bottom: 3rem;
`

export default Banner
