import React from 'react'

import { Row, Col, Icon } from 'antd'
import { howItsWork } from './static'
import { Text, Heading, Container } from '../../../../components'
import { HowToUseContent } from './styled'

export default function HowToUse () {
  return (
    <HowToUseContent>
      <Container>
        <Heading
          brandText='Пользоваться'
          level={2}
          style={{ textAlign: 'center', marginBottom: '6rem' }}
        >просто</Heading>
        <Row gutter={[24, 24]} align='middle'>
          {howItsWork.map(({text, icon}, idx) => (
            <Col md={12} lg={6} key={idx}>
              <HowToUseContent.Block>
                <Icon component={icon} />
                <Text style={{ color: '#000' }}>{text}</Text>
              </HowToUseContent.Block>
            </Col>
          ))}
        </Row>
      </Container>
    </HowToUseContent>
  )
}
