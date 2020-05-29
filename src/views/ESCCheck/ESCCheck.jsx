import React, { useReducer, useState } from 'react'
import logger from 'use-reducer-logger'

import api from '../../services'
import { Row, Col, notification } from 'antd'
import { ESCCheckContext, initialState, reducer } from './context'
import { DropZone } from './internal'
import { Container, Heading, Button, Text } from '../../components'
import { ESCCheckContent } from './styled'

const dropZones = [
  {
    type: 'file',
    text: 'Перетяните подписанный документ (.pdf/.doc файл)'
  },
  {
    type: 'sign',
    text: 'Перетяните подпись ЭЦП (.p7s файл)'
  }
]

export default function ESCCheck () {
  const [state, dispatch] = useReducer(logger(reducer), initialState)
  const [fetch, setFetch] = useState(false)

  const handleVerifySignature = () => {
    setFetch(true)
    const data = new FormData()
    data.append('file', file.data)
    data.append('sign', sign.data)

    const config = {
      headers: { 'Content-Type': 'multipart/form-data' }
    }

    api.sign.checkSign(data, config)
      .then(response => {
        const { data: { data, success, error } } = response
        if (success) {
          setFetch(false)
          dispatch({ type: 'TOGGLE_CHECK' })
          console.log(data)
        } else {
          throw new Error(error)
        }
      })
      .catch(error => {
        setFetch(false)
        notification.error({
          message: error.message
        })
      })
  }

  const { file, sign, isCheckSuccess } = state
  return (
    <ESCCheckContext.Provider value={{ state, dispatch }}>
      <ESCCheckContent>
        <Container>
          <Heading brandText='Проверка'>подписи</Heading>
          <Text>C помощью встроенного сервиса «Проверка ЭЦП» можно проверить электронные цифровые подписи (ЭЦП) в
            электронном документе.
          </Text>

            <Row style={{ marginTop: '3rem' }} gutter={[24, 24]}>
              {
                isCheckSuccess
                ? <Col span={12} offset={6}>
                    <div style={{ backgroundColor: '#F9F9F9', padding: '9rem 10rem' }}>
                      <Heading brandText='Результат:' />
                      <Heading style={{ margin: 0 }}>ЭЦП документа верна</Heading>
                    </div>
                  </Col>
                : <>
                    {dropZones.map(({ type, text }, idx) => (
                      <Col md={12} key={idx}>
                        <DropZone text={text} type={type} />
                      </Col>
                    ))}
                  </>}
            </Row>

          {(file.isLoaded && sign.isLoaded) &&
            <Button
              loading={fetch}
              onClick={() => isCheckSuccess ? console.log('download will soon') : handleVerifySignature()}
              type='primary'
              style={{ margin: '3rem auto 0', display: 'block' }}>
              {isCheckSuccess ? 'Скачать pdf' : 'Проверить подлинность документа'}
            </Button>}
        </Container>
      </ESCCheckContent>
    </ESCCheckContext.Provider>
  )
}
