import React from 'react'
import { Row, Col } from 'antd'

import history from '../../../../history'
import { Container, Heading, Text, Button } from '../../../../components'
import { images } from '../../../../resources'
import { AboutContent } from './styled'

const { home_about } = images

export default function () {
  return (
    <AboutContent>
      <div style={{ position: 'relative', zIndex: 5 }}>
        <Container>
          <Row gutter={[24, 24]} type='flex' align='middle'>
            <Col md={24} lg={12}>
              <Heading
                level={2}
                style={{ textAlign: 'left' }}
                brandText='MTC'
              >SmartDoc
              </Heading>

              <Text style={{ color: '#000', textAlign: 'left', fontWeight: 500 }}>
                Сервис обмена электронными документами,<br />
                подписанными электронной цифровой подписью.
              </Text>

              <Button onClick={() => history.push('/services')} type='primary' style={{ marginTop: '4rem' }}>Подключить</Button>
            </Col>

            <Col md={24} lg={12}>
              <img style={{ maxWidth: '80%' }} src={home_about} alt='About Us' />
            </Col>
          </Row>
        </Container>
      </div>
    </AboutContent>
  )
}
