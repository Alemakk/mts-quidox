import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

import { styleguide } from '../../constants'

const { colors } = styleguide

const ThemeFooter = styled.footer`
  width: 100%;
  overflow: hidden;
  background-color: ${colors.black};
  padding: 15rem 0;
`

ThemeFooter.Socials = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

ThemeFooter.SocialsItem = styled.li`
  margin-right: 3rem;
  &:last-of-type {
    margin-right: 0;
  }
`

ThemeFooter.SocialsItemLink = styled.a`
  text-decoration: none;
  color: ${colors.white};
`

ThemeFooter.Nav = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`
ThemeFooter.NavLink = styled(NavLink)`
  color: ${colors.white};
  margin-bottom: 2.5rem;
  &:last-of-type {
    margin-bottom: 0;
  }
`
ThemeFooter.BottomBlock = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`



export {
  ThemeFooter
}
