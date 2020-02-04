import React from 'react'

import { Row, Col, Icon } from 'antd'
import { howItsWork } from './static'
import { Text, Heading, Container } from '../../../../components'
import { HowToUseContent } from './styled'

export default function HowToUse () {
  return (
    <HowToUseContent>
      <Container style={{ maxWidth: '161rem' }}>
        <Heading
          level={2}
          style={{ marginBottom: '7rem' }}
          brandText='Пользоваться'
        >просто
        </Heading>
        <Row gutter={[24, 24]} align='middle'>
          {howItsWork.map(({ text, icon }, idx) => (
            <Col md={12} lg={6} key={idx}>
              <HowToUseContent.Block>
                <Icon component={icon} />
                <Text
                  style={{ color: '#000', marginTop: '5rem', fontWeight: 500 }}
                  dangerouslySetInnerHTML={{ __html: text }}
                />
              </HowToUseContent.Block>
            </Col>
          ))}
        </Row>
      </Container>
    </HowToUseContent>
  )
}
