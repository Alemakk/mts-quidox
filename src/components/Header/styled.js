import styled from 'styled-components'

import { styleguide } from '../../constants'

const { sizes } = styleguide

const ThemeHeader = styled.header`
  position: relative;
  box-shadow: 0px 10px 50px rgba(152, 152, 152, 0.18);
`

ThemeHeader.Top = styled.div`
  text-align: center;
  padding: 1.2rem 0;
  background-color: ${({ color }) => color};
`

ThemeHeader.Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

ThemeHeader.Logo = styled.img`
  max-width: 18rem;
  height: auto;
  cursor: pointer;
  background: url(${({ src }) => src}) center no-repeat;
  background-size: cover;
  
  @media screen and (min-width: ${sizes.laptop}) {
    max-width: 30rem;
  }
`

ThemeHeader.AlignBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

ThemeHeader.Text = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 2.3rem;
  color: #fff;

  span {
    color: #000;
  }
`

export {
  ThemeHeader
}
