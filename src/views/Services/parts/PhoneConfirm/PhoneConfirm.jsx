import React, { useState, useContext } from 'react'
import MaskedInput from 'antd-mask-input'

import api from '../../../../services'
import { ServiceContext } from '../../context'
import { icons } from '../../../../resources'
import { Form, notification } from 'antd'
import { Button, Text, Alert } from '../../../../components'

const { SuccessIcon } = icons

export default function () {
  const { dispatch } = useContext(ServiceContext)
  const [isPhoneConfirm, setPhoneConfirm] = useState(false)
  const [error, setError] = useState(null)

  const handleSendPhone = values => {
    const phone = `+375${values.phone.split('-').join('')}`
    const check_existing_user = false
    api.auth.sendPhone({ phone, check_existing_user })
      .then(({ data: { success, error } }) => {
        if (success) {
          setPhoneConfirm(true)
          dispatch({ type: 'SAVE_PHONE', payload: values.phone })
        } else {
          throw new Error(error)
        }
      })
      .catch(error => {
        setError(error.message)
      })
  }

  return (
    <>{isPhoneConfirm
      ? <div>
        <div className='flex-center flex-center--jc-center'>
          <Text bolder>Спасибо! Проверка успешно пройдена</Text>
          <SuccessIcon style={{ marginLeft: '1rem' }}/>
        </div>
        <Button style={{ display: 'block', margin: '3rem auto 0' }}
                onClick={() => dispatch({ type: 'INCREMENT_ACTIVE_STEP' })}>Продолжить</Button>
      </div>
      : <Form
        style={{ maxWidth: '55rem', margin: '0 auto', width: '100%' }}
        layout='vertical'
        className='theme-form'
        onFinish={handleSendPhone}
        hideRequiredMark
      >
        <Form.Item
          name='phone'
          label='Введите номер мобильного телефона'
          rules={[{ required: true, message: 'Обязательное поле' }]}
        >
          <MaskedInput size='large' addonBefore='+375' mask='11-111-11-11'/>
        </Form.Item>

        {error &&
        <Form.Item>
          <Alert>{error}</Alert>
        </Form.Item>}

        <Form.Item>
          <Button style={{ display: 'block', margin: '0 auto' }} type='primary' htmlType='submit'>Проверить</Button>
        </Form.Item>
      </Form>
    }
    </>
  )
}
