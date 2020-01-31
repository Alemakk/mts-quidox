import React from 'react'

import { Row, Col } from 'antd'
import { Heading, Text, Container } from '../../components'
import VideosContent from './styled'
export default function Video () {
  return (
    <VideosContent>
      <Heading
        level={2}
        space={false}
        brandText='Видео'
      >
        уроки
      </Heading>

      <Text>Мы создали серию видеоуроков, чтобы помочь вам быстрее
        разобраться с <br /> сервисом, отправлять и получатьдокументы с ЭЦП.
      </Text>

      <Container>
      </Container>
    </VideosContent>
  )
}
