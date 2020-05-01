import styled from 'styled-components'
import { rgba } from 'polished'

import { styleguide } from '../../../../constants'

const { colors, sizes } = styleguide

const ServicePackageContent = styled.section``

const Package = styled.div`
  padding-bottom: 3rem;
  text-align: center;
  margin: 1rem 0 4rem;
  overflow: hidden;
`

Package.Header = styled.div`
  text-align: center;
  padding: 1.5rem 2rem;
  background-color: ${colors.black};
  position: relative;
  &:after {
    display: ${({ top }) => top ? 'block' : 'none'};
    content: '';
    width: 0;
    height: 0;
    border-top: 5rem solid ${({ color }) => color};
    border-left: 5rem solid transparent;
    position: absolute;
    right: 0;
    top: 0;
  }
  @media screen and (min-width: ${sizes.laptop}) {
    font-size: 2rem;
    &:after {
    border-top: 10rem solid ${({ color }) => color};
    border-left: 10rem solid transparent;
    }
  }
`

Package.Star = styled.img`
  position: absolute;
  width: 1.6rem;
  height: 1.6rem;
  right: 0;
  top: 0;
  z-index: 5;
  transform: translate(-25%, 50%);
    @media screen and (min-width: ${sizes.mobile}) {
    transform: translate(-50%, 50%);
      width: 3rem;
      height: 3rem;
  }
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
  padding: 1rem 2rem;
  &:nth-child(even) {
    background-color: ${rgba(colors.black, 0.1)};
  }
`

export {
  ServicePackageContent,
  Package
}
