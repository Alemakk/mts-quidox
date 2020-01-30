import React from 'react'

import { Row, Col } from 'antd'
import { Heading, Text, Container, NewsItem } from '../../components'
import { news } from './static'
import { NewsContent } from './styled'

export default function News () {
  return (
    <NewsContent>
      <Heading
        brandText='Новости'
        level={2}
      >
        проекта
      </Heading>

      <Text>Здесь вы можете найти актуальные новости об обновлениях, акциях и многом другом в  МТС Quidox </Text>
      <Container>
        <Row gutter={[24, 120]}>
          {news.map(({ id, text, image }, idx) => (
            <Col md={24} lg={idx === 0 ? 24 : 12} key={idx}>
              <NewsItem text={text} path={image} id={id} />
            </Col>
          ))}
        </Row>
      </Container>
    </NewsContent>
  )
}
