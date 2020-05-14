import React from 'react'

import { Row, Col } from 'antd'
import { Icon } from '@ant-design/compatible'
import { howItsWork } from './static'
import { Text, Heading, Container } from '../../../../components'
import { HowToUseContent } from './styled'

const sizes = {
  xs: 24,
  sm: 24,
  md: 12,
  lg: 6
}

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
            <Col key={icon} {...sizes}>
              <HowToUseContent.Block>
                <Icon component={icon} />
                <Text
                  style={{ marginTop: '3rem', minHeight: '5.1rem' }}
                  dangerouslySetInnerHTML={{ __html: text }}
                  bolder
                />
              </HowToUseContent.Block>
            </Col>
          ))}
        </Row>
      </Container>
    </HowToUseContent>
  )
}
