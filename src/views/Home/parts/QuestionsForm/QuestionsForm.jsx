import React from 'react'

import { Heading, Text, Container, ContactForm } from '../../../../components'
import { QuestionFormSection, QuestionForm } from './styled'

const tel = 'tel:0890'

export default function () {
  return (
    <QuestionFormSection>
      <Container small>
        <Heading
          level={2}
          brandText='Остались'
        >
          вопросы?
        </Heading>

        <Text gray>Звоните по номеру</Text>
        <QuestionForm.Link href={tel}>0890</QuestionForm.Link>
        <Text gray>или заполните форму обратной связи</Text>

        <ContactForm />
      </Container>
    </QuestionFormSection>
  )
}
