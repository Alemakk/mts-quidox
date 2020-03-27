import React from 'react'
import MaskedInput from 'antd-mask-input'

import { Form } from 'antd'
import { Button } from '../../../../components'

export default function () {

  const handleSendPhone = values => {
    const phone = `375${values.phone.split('-').join('')}`
    console.log(phone)
  }

  return (
    <Form
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
        <MaskedInput size='large' addonBefore='+375' mask='11-111-11-11' />
      </Form.Item>

      <Form.Item>
        <Button style={{ display: 'block', margin: '0 auto' }} type='primary' htmlType='submit'>Проверить</Button>
      </Form.Item>
    </Form>
  )
}
