import React from 'react'

import { Container, Heading, Text } from '../../../../components'
import { QuidoxProcessContent } from './styled'
export default function QuidoxProcess () {
  return (
    <QuidoxProcessContent>
      <Heading
        style={{ textAlign: 'center' }}
        brandPosition='right'
        brandText='MTC Quidox'
      >
        Процессы
      </Heading>

      <Container style={{ textAlign: 'center' }}>
        <Text>Мы создали серию видеоуроков, чтобы помочь вам быстрее разобраться с <br /> сервисом, отправлять и получать документы с ЭЦП.</Text>
      </Container>
    </QuidoxProcessContent>
  )
}
