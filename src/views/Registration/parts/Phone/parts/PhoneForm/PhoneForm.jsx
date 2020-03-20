import React, { useState, useContext } from 'react'
import MaskedInput from 'antd-mask-input'
import { LoadingOutlined } from '@ant-design/icons'

import api from '../../../../../../services'
import { RegisterContext } from '../../../../context'
import { Form, Checkbox, notification } from 'antd'
import { Button } from '../../../../../../components'

export default function () {
  const [isDisabled, setDisabled] = useState(true)
  const { state: { isFetching }, dispatch } = useContext(RegisterContext)
  const handleSendPhone = values => {
    const phone = `+375${values.phone.split('-').join('')}`
    dispatch({ type: 'FETCHING_INIT', payload: true })

    api.auth.sendPhone({ phone: phone })
      .then(({ data: { success, error } }) => {
        if (success) {
          notification.success({
            message: 'На указанный Вами номер отправлено SMS с кодом.'
          })
          dispatch({ type: 'FETCHING_INIT', payload: false })
          dispatch({ type: 'SAVE_FORM_DATA', payload: { phone: phone } })
          dispatch({ type: 'CHANGE_ACTIVE_STEP' })
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
  return (
    <Form
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
        <MaskedInput size='large' addonBefore='+375' mask='11-111-11-11' />
      </Form.Item>

      <Form.Item>
        <Checkbox onChange={() => setDisabled(!isDisabled)}> Я ознакомился и принимаю <span style={{ fontWeight: 500 }}>Правила пользования услугой.</span></Checkbox>
      </Form.Item>

      <Form.Item>
        <Button
          type='primary'
          disabled={isDisabled}
          htmlType='submit'
        >
          {isFetching && <LoadingOutlined />}
          Продолжать
        </Button>
      </Form.Item>
    </Form>
  )
}