import React from 'react'

import { Row, Col } from 'antd'
import { Container, Heading, Text } from '../../../../components'
import { news } from './static'
import { NewsContent } from './styled'
export default function News () {
  return (
    <NewsContent>
      <Heading
        brandText='Новости'
        level={2}
        style={{ textAlign: 'center', marginBottom: '8rem' }}
      >
        проекта
      </Heading>
      <Container>
        <Row gutter={[24, 24]}>
          {news.map(({ text, image }, idx) => (
            <Col md={24} lg={12} key={idx}>
              <NewsContent.Item src={image}>
                <Text style={{ color: '#fff' }}>{text}</Text>
              </NewsContent.Item>
            </Col>
          ))}
        </Row>
      </Container>
    </NewsContent>
  )
}