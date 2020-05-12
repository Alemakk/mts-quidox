import styled from 'styled-components'
import { darken } from 'polished'
import { styleguide } from '../../constants'

const { colors } = styleguide

const ThemeButton = styled.button`
  display: inline-block;
  white-space: nowrap;
  text-align: center;
  cursor: pointer;
  touch-action: manipulation;
  font-weight: 700;
  border: .2rem solid transparent;
  border-radius: .6rem;
  outline: none;
  transition: .2s linear;
  
  &.button_primary {
    background-color: #E01021;
    color: ${colors.white};
    &:hover {
    
      background-color: ${darken(0.1, '#E01021')};
    }
  }
  
  &.button_secondary {
    border-color: ${({ secondaryColor }) => secondaryColor};
    background-color: ${({ secondaryColor }) => secondaryColor};
    color: ${colors.white};
    &:hover {
      background-color: transparent;
      color: ${({ secondaryColor }) => secondaryColor};
    }
  }

  &.ghost {
    background: transparent;
    
    &.ghost_primary {
      color: ${({ primaryColor }) => primaryColor};
      border-color: ${({ primaryColor }) => primaryColor};
      &:hover {
        color: ${colors.white};
        background-color: ${({ primaryColor }) => primaryColor};
      }    
    }
    
    &.ghost_secondary {
      color: ${({ secondaryColor }) => secondaryColor};
      border-color: ${({ secondaryColor }) => secondaryColor};
      &:hover {
        color: ${colors.white};
        background-color: ${({ secondaryColor }) => secondaryColor};
      }    
    }
  }
  .button-with-bg {
    position: relative;
    &:after {
      display: block;
      content: '';
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  
  &[disabled] {
    color: ${colors.silver_sand};
    background-color: ${colors.alabaster};
    cursor: not-allowed;
    border-color: ${colors.silver_sand};
    &:hover {
      color: ${colors.silver_sand};
      background-color: ${colors.alabaster};
      border-color: ${colors.silver_sand};
    }
  }
`

export {
  ThemeButton
}
