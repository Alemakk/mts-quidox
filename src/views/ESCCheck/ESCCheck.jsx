import React, { useReducer } from 'react'
import logger from 'use-reducer-logger'

import { Row, Col } from 'antd'
import { ESCCheckContext, initialState, reducer } from './context'
import { DropZone } from './internal'
import { Container, Heading, Text } from '../../components'
import { ESCCheckContent } from './styled'
export default function ESCCheck () {
  const [state, dispatch] = useReducer(logger(reducer), initialState)

  const { types } = state
  return (
    <ESCCheckContext.Provider value={{ state, dispatch }}>
      <ESCCheckContent>
        <Container>
          <Heading brandText='Проверка'>подписи</Heading>
          <Text>C помощью сервиса «Проверка ЭЦП» можно проверить электронно-цифровые подписи (ЭЦП) в<br />
            электронном документе. Для проверки ЭЦП используется сертифицированное средство:<br />
            Программный комплекс криптографической защиты информации LWO Crypt. Версия 1.0
          </Text>

          <Row gutter={[24, 24]}>
            {types.map((type, idx) => (
              <Col md={12} key={idx}>
                <DropZone type={type} />
              </Col>
            ))}
          </Row>
        </Container>
      </ESCCheckContent>
    </ESCCheckContext.Provider>
  )
}
