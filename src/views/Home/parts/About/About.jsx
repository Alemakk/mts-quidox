import React from 'react'
import { Row, Col } from 'antd'

import { useWindowDimension } from '../../../../hooks'
import { Container, Heading, Text, Button } from '../../../../components'
import { images } from '../../../../resources'
import { AboutContent } from './styled'

const { home_about } = images

export default function About () {
  const { width } = useWindowDimension()
  return (
    <AboutContent>
      <div style={{ position: 'relative', zIndex: 5 }}>
        <Container>
          <Row gutter={[24, 24]} type='flex' align='middle'>
            <Col md={24} lg={12}>
              <Heading
                level={2}
                style={{ textAlign: 'left', margin: 0 }}
                brandText='MTC QuiDox'
              />

              <Text style={{ color: '#000', textAlign: 'left', fontWeight: 500, marginTop: '1rem' }}>
                Центр обмена электронными документами,<br />
                подписанными электронной цифровой подписью
              </Text><br />

              <Button type='primary' style={{ marginTop: width < 1200 ? '1.5rem' : '1rem' }}>Подключить</Button>
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
