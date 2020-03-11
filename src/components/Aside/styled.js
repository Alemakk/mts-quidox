import styled from 'styled-components'
import { rgba } from 'polished'
import { NavLink } from 'react-router-dom'
import { styleguide } from '../../constants'

const { colors, sizes } = styleguide

const ThemeAside = styled.aside`
  position: absolute;
  top: 0;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  overflow: hidden;
  background-color: ${rgba(colors.black, 0.8)};
  box-shadow: 0px 10px 50px 0px rgba(152, 152, 152, 0.18);
  z-index: 10;
`

ThemeAside.Nav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  max-width: 75%;
  margin-left: auto;
  background-color: ${colors.white};
  
  @media screen and (min-width: ${sizes.laptop}) {
    max-width: 50rem;
  }
`

ThemeAside.Link = styled(NavLink)`
   width: 100%;
   font-size: 1.5rem;
   font-weight: bold;
   line-height: 2rem;
   padding: 1.6rem 2.5rem;
   border-bottom: .1rem solid ${colors.silver_sand};
   &:hover {
    color: ${colors.black};
   }
   
   @media screen and (min-width: ${sizes.laptop}) {
      padding: 1.5rem 2rem;
      font-size: 1.5rem;
   }
`

export {
  ThemeAside
}
