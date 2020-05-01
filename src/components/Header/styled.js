import styled from 'styled-components'

import { styleguide } from '../../constants'

const { colors } = styleguide

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
  padding: 1.3rem 0;
`

ThemeHeader.Logo = styled.img`
  max-width: 30rem;;
  height: auto;
  cursor: pointer;
  background: url(${({ src }) => src}) center no-repeat;
  background-size: cover;
`

ThemeHeader.AlignBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

ThemeHeader.Avatar = styled.div`
  width: 6rem;
  min-width: 6rem;
  height: 6rem;
  border-radius: 100%;
  background-color: ${({ color }) => color};
  color: ${colors.white};
  font-size: 2rem;
  text-align: center;
  text-transform: capitalize;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
