import React from 'react'

import { Row, Col, Icon } from 'antd'
import { ESCCheckIcon } from '../../../../resources'
import { Container, Text, Heading, Button } from '../../../../components'
import { ESCCheckContent } from './styled'
export default function ESCCheck () {
  return (
    <ESCCheckContent>
      <Container>
        <Row gutter={[24, 24]}>
          <Col md={24} lg={{ offset: 3, span: 18 }}>
            <ESCCheckContent.Block>
              <Heading
                brandText='Проверить'
                level={2}
              >
                электронную подпись
              </Heading>

              <Text style={{ textAlign: 'center' }}>
                C помощью сервиса «Проверка ЭЦП» можно проверить электронно-цифровые подписи (ЭЦП) в электронном документе.
              </Text>

              <Icon style={{ margin: '6rem 0' }} component={ESCCheckIcon} />

              <Button type='secondary' ghost>Проверить подпись</Button>
            </ESCCheckContent.Block>
          </Col>
        </Row>
      </Container>
    </ESCCheckContent>
  )
}
