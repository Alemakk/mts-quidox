import React, { useReducer } from 'react'
import logger from 'use-reducer-logger'

import { Row, Col } from 'antd'
import { ESCCheckContext, initialState, reducer } from './context'
import { DropZone } from './internal'
import { Container, Heading, Button, Text } from '../../components'
import { ESCCheckContent } from './styled'

const DropZoneTypes = [
  {
    type: 'file',
    text: 'Перетяните подписанный документ (.pdf/.doc/.zip файл)'
  },
  {
    type: 'sign',
    text: 'Перетяните подпись ЭЦП (.sig файл)'
  }
]

export default function ESCCheck () {
  const [state, dispatch] = useReducer(logger(reducer), initialState)

  const handleVerifySignature = () => {
    console.log('File', file.data)
    console.log('Sign', sign.data)
  }

  const { types, file, sign } = state
  return (
    <ESCCheckContext.Provider value={{ state, dispatch }}>
      <ESCCheckContent>
        <Container>
          <Heading brandText='Проверка'>подписи</Heading>
          <Text>C помощью сервиса «Проверка ЭЦП» можно проверить электронно-цифровые подписи (ЭЦП) в<br />
            электронном документе. Для проверки ЭЦП используется сертифицированное средство:<br />
            Программный комплекс криптографической защиты информации LWO Crypt. Версия 1.0
          </Text>

          <Row style={{ marginTop: '3rem' }} gutter={[24, 24]}>
            {DropZoneTypes.map(({ type, text }, idx) => (
              <Col md={12} key={idx}>
                <DropZone text={text} type={type} />
              </Col>
            ))}
          </Row>

          {(file.isLoaded && sign.isLoaded) &&
            <Button onClick={() => handleVerifySignature()} type='primary' style={{ margin: '3rem auto 0', display: 'block' }}>Проверить подлинность документа</Button>}
        </Container>
      </ESCCheckContent>
    </ESCCheckContext.Provider>
  )
}
