import React from 'react'

import history from '../../../../history'
import { useImage } from '../../../../hooks'
import { Row, Col } from 'antd'
import { images } from '../../../../resources'
import { Container, Text, Heading, Button } from '../../../../components'
import { ESCCheckContent } from './styled'

import './esc.scss'

const { esc } = images

export default function ESCCheck () {
  const { src } = useImage(esc)
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
                С помощью встроенного сервиса «Проверка ЭЦП» можно проверить электронную цифровую подпись в документе.
              </Text>

              <img className='esc-image' src={src} alt='data' />

              <Button type='secondary' ghost onClick={() => history.push('/esc-check')}>Проверить подпись</Button>
            </ESCCheckContent.Block>
          </Col>
        </Row>
      </Container>
    </ESCCheckContent>
  )
}
