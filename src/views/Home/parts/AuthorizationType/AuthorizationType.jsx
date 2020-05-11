import React from 'react'

import { Row, Col } from 'antd'
import { Heading, Container } from '../../../../components'
import { auth } from './static'
import { AuthorizationTypeItem } from './internal'
import { AuthTypeContent } from './styled'

const sizes = {
  xs: 24,
  sm: 12,
  md: 12,
  lg: 6
}

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
            <Col {...sizes} key={idx}>
              <AuthorizationTypeItem data={i} />
            </Col>
          ))}
        </Row>
      </Container>
    </AuthTypeContent>
  )
}
