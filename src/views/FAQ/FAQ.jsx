import React from 'react'

import { Container, Heading, Text } from '../../components'
import { faq } from './static'
import { FAQContent, ThemeCollapse, ThemePanel } from './styled'

export default function FAQ ({ theme: { theme } }) {
  return (
    <FAQContent>
      <Container>
        <Heading brandText='Вопросы'>и ответы</Heading>
        <ThemeCollapse style={{ marginTop: 90 }} color={theme['@primary-color']}>
          {faq.map(({ title, text }, idx) => (
            <ThemePanel header={title} key={idx}>
              <Text dangerouslySetInnerHTML={{__html: text}}></Text>
            </ThemePanel>
          ))}
        </ThemeCollapse>
      </Container>
    </FAQContent>
  )
}
