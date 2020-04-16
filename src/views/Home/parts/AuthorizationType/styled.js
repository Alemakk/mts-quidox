import styled from 'styled-components'

import { styleguide } from '../../../../constants'

const { colors } = styleguide

const AuthTypeContent = styled.section`
  background-color: ${colors.alabaster};
`

AuthTypeContent.Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
`

export {
  AuthTypeContent
}
