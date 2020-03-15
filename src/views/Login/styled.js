import styled from 'styled-components'

import { styleguide } from '../../constants'

const { colors } = styleguide

const LoginContent = styled.div`
  display: flex;
  background-color: ${colors.alabaster};
`

LoginContent.Aside = styled.div`
  width: 100%;
  height: 100%;
  max-width: 72rem;
  background-color: ${colors.white};
  padding-top: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

LoginContent.AsideContent = styled.div`
  text-align: left;
  max-width: 50rem;
`

LoginContent.Description = styled.div`

  margin-top: 5rem;
`

LoginContent.Main = styled.div`
  width: 100%;
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
