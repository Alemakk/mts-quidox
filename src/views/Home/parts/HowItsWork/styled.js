import styled from 'styled-components'
import { Icon } from 'antd'

import { styleguide } from '../../../../constants'

const { colors } = styleguide

const HowItsWorkContent = styled.section``

const Package = styled.div`
  padding-bottom: 6rem;
  text-align: center;
  margin: 1rem 0 4rem;
  overflow: hidden;
`

Package.Header = styled.div`
  font-size: 4.8rem;
  color: ${colors.white};
  text-align: center;
  padding: 3.5rem 1rem;
  background-color: ${colors.black};
  position: relative;
  &:after {
    display: ${({ top }) => top ? 'block' : 'none'};
    content: '';
    width: 0;
    height: 0;
    border-top: 20rem solid ${({ color }) => color};
    border-left: 20rem solid transparent;
    position: absolute;
    right: 0;
    top: 0;
  }
`

Package.Star = styled(Icon)`
  position: absolute;
  right: 0;
  top: 0;
  z-index: 5;
  transform: translate(-50%, 50%);
`

Package.List = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0 0 3rem;
  padding: 0;
`

Package.Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 2.5rem;
  &:nth-child(even) {
    background-color: ${colors.alabaster};
  }
`

export {
  HowItsWorkContent,
  Package
}