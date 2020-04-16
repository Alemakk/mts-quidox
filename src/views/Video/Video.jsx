import React from 'react'

import { Row, Col } from 'antd'
import { Heading, Text, Container } from '../../components'
import { VideoItem } from './internal'
import video from './static'
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
        разобраться с <br /> сервисом, отправлять и получать документы с ЭЦП.
      </Text>

      <div style={{ marginTop: 150 }}>
        <Container>
          <Row gutter={[24, 150]}>
            {video.map((i, idx) => (
              <Col lg={24} key={idx}>
                <VideoItem direction={idx % 2} data={i} />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </VideosContent>
  )
}
