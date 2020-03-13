import styled from 'styled-components'

import { styleguide } from '../../../../constants'

const { colors } = styleguide

const QuestionFormSection = styled.section`
  background-color: ${colors.alabaster};
`

const QuestionForm = styled.div``

QuestionForm.Link = styled.a`
  display: block;
  color: ${colors.red};
  font-size: 2.6rem;
  font-weight: 500;
  text-align: center;
  margin-bottom: 3rem;
`

export {
  QuestionFormSection,
  QuestionForm
}
