import React from 'react'

import history from '../../../../history'
import { Row, Col } from 'antd'
import { Container, Heading, NewsItem, Button } from '../../../../components'
import { news } from '../../../News/static'
import { NewsContent } from './styled'

const sizes = {
  xs: 24,
  sm: 24,
  md: 12,
  lg: 12
}

export default function () {
  return (
    <NewsContent>
      <Container medium>
        <Heading
          brandText='Актуальная'
          level={2}
        >
          информация
        </Heading>

        {/*<Row gutter={[24, 24]}>*/}
          {news.map(({ text, image, id }, idx) => (
            // <Col {...sizes} key={idx}>
              <NewsItem text={text} path={image} id={id} />
            // </Col>
          ))}
        {/*</Row>*/}
        <div style={{ textAlign: 'center', marginTop: '4rem' }}>
          <Button type='secondary' onClick={() => history.push('/news')} ghost>Другие новости</Button>
        </div>
      </Container>
    </NewsContent>
  )
}
