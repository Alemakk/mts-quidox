import React from 'react'

import { Row, Col } from 'antd'
import { Container, Heading, NewsItem } from '../../../../components'
import { news } from './static'
import { NewsContent } from './styled'
export default function News () {
  return (
    <NewsContent>
      <Heading
        brandText='Новости'
        level={2}
        style={{ marginBottom: '8rem' }}
      >
        проекта
      </Heading>
      <Container>
        <Row gutter={[24, 24]}>
          {news.map(({ text, image, id }, idx) => (
            <Col md={24} lg={12} key={idx}>
              <NewsItem text={text} path={image} id={id} />
            </Col>
          ))}
        </Row>
      </Container>
    </NewsContent>
  )
}
