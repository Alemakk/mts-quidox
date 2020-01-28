import React from 'react'

import { Row, Col, Icon } from 'antd'
import { Heading, Text, Container } from '../../../../components'
import { auth } from './static'
import { AuthTypeContent } from './styled'
export default function AuthorizationType () {
  return (
    <AuthTypeContent>
      <Heading
        brandText='Выберите'
        level={2}
        style={{ textAlign: 'center', marginBottom: '9rem' }}
      >
        способ авторизации
      </Heading>

      <Container>
        <Row gutter={[24, 24]}>
          {auth.map(({ text, icon }, idx) => (
            <Col md={12} lg={6} key={idx}>
              <AuthTypeContent.Item>
                <Icon component={icon} />
                <Text style={{ color: '#000' }}>{text}</Text>
              </AuthTypeContent.Item>
            </Col>
          ))}
        </Row>
      </Container>
    </AuthTypeContent>
  )
}
