import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { styleguide } from '../../constants'

const { colors } = styleguide

const ThemeNav = styled.div`
  display: flex;
  flex-direction: ${({ type }) => type === 'desktop' ? 'row' : 'column'};
  justify-content: ${({ type }) => type === 'desktop' ? 'space-between' : 'flex-start'};
  align-items: center;
  background-color: ${colors.white};
  width: 50%;
  height: 100%;
  @media screen and (min-width: 1200px) {
    width: auto;
    height: auto;
  }
`

ThemeNav.Link = styled(NavLink)`
  display: flex;
  flex-direction: ${({ type }) => type === 'desktop' ? 'column' : 'row'};
  align-items: flex-start;
  position: relative;
  font-size: 1.6rem;
  font-weight: 500;
  width: 100%;
  padding: 2rem;
  
  @media screen and (min-width: 1200px) {
    height: 100%;
    margin-left: 6rem;
    font-size: 1.8rem;
    align-items: center;
    width: auto;
    padding: 0;
    border-bottom: 0;
  }
  
  &:after {
    display: block;
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 100%;
    width: .3rem;
    background-color: transparent;
    
    @media screen and (min-width: 1200px) {
      bottom: -3rem;
      left: 0;
      width: 100%;
      height: .3rem
    }
  }
  
  &.active {
    &:after {
      background-color: ${({ activeStyle }) => activeStyle.color};
    }
  }
`

export {
  ThemeNav
}
