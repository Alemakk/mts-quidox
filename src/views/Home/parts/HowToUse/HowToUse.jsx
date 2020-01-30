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
          level={2}
          style={{ marginBottom: '6rem' }}
          brandText='Пользоваться'
        >просто
        </Heading>
        <Row gutter={[24, 24]} align='middle'>
          {howItsWork.map(({ text, icon }, idx) => (
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
