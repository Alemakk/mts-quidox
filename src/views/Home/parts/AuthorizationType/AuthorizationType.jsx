import React from 'react'

import { Row, Col } from 'antd'
import { Heading, Container } from '../../../../components'
import { auth } from './static'
import { AuthorizationTypeItem } from './internal'
import { AuthTypeContent } from './styled'
export default function AuthorizationType () {
  return (
    <AuthTypeContent>
      <Heading
        brandText='Выберите'
        level={2}
      >
        способ авторизации
      </Heading>

      <Container>
        <Row gutter={[24, 24]}>
          {auth.map((i, idx) => (
            <Col md={12} lg={6} key={idx}>
              <AuthorizationTypeItem data={i} />
            </Col>
          ))}
        </Row>
      </Container>
    </AuthTypeContent>
  )
}
