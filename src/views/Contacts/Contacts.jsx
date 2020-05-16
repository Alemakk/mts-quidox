import React, { useRef } from 'react'

import { Heading, Text, Container, ContactForm } from '../../components'
import { ContactsContent } from './styled'

export default function Contact ({ theme: { theme } }) {
  return (
    <ContactsContent>
      <Heading brandText='Контакты' level={2} />

      <Text>Мы ответим на любой ваш вопрос</Text>
      <Container small>
        <ContactForm />
      </Container>
    </ContactsContent>
  )
}
