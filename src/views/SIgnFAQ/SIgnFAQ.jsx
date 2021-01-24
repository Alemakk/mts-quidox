import React from 'react'

import { Container, Heading, Text } from '../../components'
import { faq } from './static'
import { FAQContent, ThemeCollapse, ThemePanel } from './styled'

export default function SIgnFAQ ({ theme: { theme } }) {
  return (
    <FAQContent>
      <Container>
        <Heading brandText='Настройки для работы с ЭЦП. '>Файлы и ссылки для загрузки</Heading>
        <ThemeCollapse style={{ marginTop: 90 }} color={theme['@primary-color']}>
          {faq.map(({ title, text }, idx) => (
            <ThemePanel header={title} key={idx}>
              <Text style={{ textAlign: 'justify' }} dangerouslySetInnerHTML={{ __html: text }} />
            </ThemePanel>
          ))}
        </ThemeCollapse>
      </Container>
    </FAQContent>
  )
}
