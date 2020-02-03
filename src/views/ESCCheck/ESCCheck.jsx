import React from 'react'

import { Container, Heading, Text } from '../../components'
import { ESCCheckContent } from './styled'
export default function ESCCheck () {
  return (
    <ESCCheckContent>
      <Container>
        <Heading brandText='Проверка'>подписи</Heading>
        <Text>C помощью сервиса «Проверка ЭЦП» можно проверить электронно-цифровые подписи (ЭЦП) в<br />
          электронном документе. Для проверки ЭЦП используется сертифицированное средство:<br />
          Программный комплекс криптографической защиты информации LWO Crypt. Версия 1.0
        </Text>
      </Container>
    </ESCCheckContent>
  )
}
