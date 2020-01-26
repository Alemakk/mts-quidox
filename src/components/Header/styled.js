import styled from 'styled-components'

import { styleguide } from '../../constants'

const { sizes } = styleguide

const ThemeHeader = styled.header`
  position: relative;
  box-shadow: 0px 10px 50px rgba(152, 152, 152, 0.18);
`

ThemeHeader.Top = styled.div`
  text-align: center;
  padding: 0.5rem 0;
  background-color: ${({ color }) => color};
`

ThemeHeader.Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

ThemeHeader.Logo = styled.img`
  max-width: 10rem;
  width: 100%;
  height: auto;
  cursor: pointer;
  
  @media screen and (min-width: ${sizes.laptop}) {
    max-width: 18rem;
  }
`

ThemeHeader.AlignBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

ThemeHeader.Text = styled.p`
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 2.6rem;
  color: #fff;

  span {
    color: #000;
  }
`

export {
  ThemeHeader
}
