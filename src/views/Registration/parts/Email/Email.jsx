import React, { useState } from 'react'

import { Form, Input, Checkbox } from 'antd'
import { Button } from '../../../../components'

export default function () {
  const [isDisabled, setDisabled] = useState(true)

  const handleEmailSend = values => {
    console.log(values)
  }
  return (
    <Form
      layout='vertical'
      className='theme-form'
      onFinish={handleEmailSend}
      hideRequiredMark
    >
      <Form.Item
        label='Введите адрес электронной почты '
        name='email'
        rules={[
          {
            required: true,
            message: 'Обязательное поле!'
          },
          {
            type: 'email',
            message: 'Не валидный имейл!'
          }
        ]}
      >
        <Input size='large' />
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
          Продолжать
        </Button>
      </Form.Item>
    </Form>
  )
}
