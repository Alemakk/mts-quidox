import styled from 'styled-components'

import { styleguide } from '../../constants'

const { colors } = styleguide

const RegistrationContent = styled.div`
  min-height: 100vh;
  display: flex;
  background-color: ${colors.alabaster};
`

RegistrationContent.Main = styled.div`
  flex-basis: 60%;
  padding: 8rem 1rem;
`

RegistrationContent.Content = styled.div`
  width: 100%;
  max-width: 90rem;
  padding: 2rem;
  margin: 3rem auto 0 auto;
`

RegistrationContent.Types = styled.div`
  margin-top: 5rem;
  padding: 0 2rem;
`

RegistrationContent.FormWrapp = styled.div`
  background-color: ${colors.white};
  padding: 2rem;
  margin-top: 3rem;
`

export default RegistrationContent
