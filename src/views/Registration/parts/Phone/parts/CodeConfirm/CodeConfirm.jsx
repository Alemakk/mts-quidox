import React, { useContext, useEffect, useState } from 'react'
import { useTimer } from 'use-timer'

import api from '../../../../../../services'
import { RegisterContext } from '../../../../context'
import { Form, Input, notification } from 'antd'
import { Button, Alert } from '../../../../../../components'

export default function () {
  const [codeError, setCodeError] = useState('')
  const { time, start } = useTimer({ initialTime: 60, endTime: 0, timerType: 'DECREMENTAL' })
  const { state: { data }, dispatch } = useContext(RegisterContext)

  useEffect(() => {
    start()
  }, [start])

  const handleConfirmCode = values => {
    dispatch({ type: 'FETCHING_INIT', payload: true })

    api.auth.confirmSmsCode({ ...values, ...data })
      .then(({ data: { success, error } }) => {
        if (success) {
          notification.success({
            message: 'СМС код подтвержден'
          })
          dispatch({ type: 'FETCHING_INIT', payload: false })
          dispatch({ type: 'SAVE_FORM_DATA', payload: values })
          dispatch({ type: 'CHANGE_ACTIVE_STEP' })
        } else {
          throw new Error(error)
        }
      })
      .catch(error => {
        dispatch({ type: 'FETCHING_INIT', payload: false })
        setCodeError(error.message)
      })
  }

  const handleSendPhone = () => {
    dispatch({ type: 'FETCHING_INIT', payload: true })

    api.auth.sendPhone(data)
      .then(({ data: { success, error } }) => {
        if (success) {
          notification.success({
            message: 'На указанный Вами номер отправлено SMS с кодом.'
          })
          start()
          dispatch({ type: 'FETCHING_INIT', payload: false })
        } else {
          throw new Error(error)
        }
      })
      .catch(error => {
        dispatch({ type: 'FETCHING_INIT', payload: false })
        console.error(error.message)
        notification.error({
          message: error.message
        })
      })
  }

  const isTimeEnd = time === 0
  return (
    <Form
      layout='vertical'
      className='theme-form'
      onFinish={handleConfirmCode}
      hideRequiredMark
    >
      <Form.Item
        label='Введите полученный код'
        name='code'
        rules={[{ required: true, message: 'Обязательное поле' }]}
      >
        <Input onChange={() => setCodeError('')} type='text' size='large' />
      </Form.Item>

      {codeError &&
        <Form.Item>
          <Alert>{codeError}</Alert>
        </Form.Item>
      }

      <Form.Item>Мы отправили код подтверждения на указанный вами номер</Form.Item>

      <Form.Item>
        Не получили код? &nbsp;
        {isTimeEnd
          ? <span
            onClick={handleSendPhone}
            style={{ fontWeight: 500, cursor: 'pointer' }}
          >
            Выслать повторно
          </span>
          : <span style={{ colors: '#000' }}>
            Выслать повторно {`через ${time} секунд`}
          </span>}
      </Form.Item>

      <Form.Item>
        <Button htmlType='submit' type='primary'>Продолжить</Button>
      </Form.Item>
    </Form>
  )
}
