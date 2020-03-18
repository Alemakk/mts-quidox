import styled from 'styled-components'

import { styleguide } from '../../constants'

const { colors } = styleguide

const LoginContent = styled.div`
  min-height: 100vh;
  display: flex;
  background-color: ${colors.alabaster};
`

LoginContent.Main = styled.div`
  flex-basis: 60%;
  padding: 8rem 1rem;
  text-align: center;
`

LoginContent.FormWrapp = styled.div`
  display: inline-block;
  width: 100%;
  max-width: 88rem;
  margin: 5rem auto auto;
  background-color: ${colors.white};
  padding: 5rem;
`

LoginContent.Footer = styled.div`
  margin-top: 5rem;
  text-align: left;
`

export {
  LoginContent
}
