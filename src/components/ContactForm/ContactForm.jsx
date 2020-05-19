import React from 'react'
import MaskedInput from 'antd-mask-input'

import api from '../../services'
import { Row, Col, Form, Input, notification } from 'antd'
import { Button } from '../../components'

const { TextArea } = Input
const sizes = { xs: 24, sm: 24, md: 24, lg: 12 }
const sizesTextArea = { xs: 24, sm: 24, md: 24, lg: 24 }

export default function () {
  const handleSendMessage = value => {
    api.mts.sendInvoice(value)
      .then(({ data: { success, error } }) => {
        if (success) {
          notification.success({
            message: `Уважаемый ${value.name}`,
            description: 'В ближайшее время мы ознакомимся с вашим обращением'
          })
        } else {
          throw new Error(error)
        }
      })
      .catch(error => {
        notification.error({
          message: error.message
        })
      })
  }

  return (
    <Form className='theme-form' layout='vertical' onFinish={handleSendMessage} style={{ marginTop: '3rem' }} hideRequiredMark>
      <Row gutter={[24, 24]}>
        <Col {...sizes}>
          <Form.Item
            label='Название компании'
            name='company'
            rules={[{ required: true, message: 'Введите название компании' }]}
          >
            <Input size='large' placeholder='Название компании' />
          </Form.Item>
        </Col>

        <Col {...sizes}>
          <Form.Item
            label='Имя'
            name='name'
            rules={[{ required: true, message: 'Введите ваше имя' }]}
          >
            <Input size='large' placeholder='Ваше имя' />
          </Form.Item>
        </Col>

        <Col {...sizes}>
          <Form.Item
            name='phone'
            label='Номер мобильного телефона'
            rules={[{ required: true, message: 'Обязательное поле' }]}
          >
            <MaskedInput size='large' addonBefore='+375' mask='11-111-11-11' />
          </Form.Item>
        </Col>

        <Col {...sizes}>
          <Form.Item
            label='Адрес электронной почты'
            name='email'
            rules={[{ required: true, pattern: new RegExp('^[a-zA-Z0-9.!#$%&\'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$'), message: 'Введите ваше адрес электронной почты' }]}
          >
            <Input size='large' placeholder='Ваше адрес электронной почты' />
          </Form.Item>
        </Col>

        <Col {...sizesTextArea}>
          <Form.Item
            label='Сообщение'
            name='message'
            rules={[{ required: true, message: 'Введите ваше сообщение' }]}
          >
            <TextArea style={{ resize: 'none' }} rows={8} size='large' placeholder='Текст сообщения' />
          </Form.Item>
        </Col>
      </Row>
      <div style={{ textAlign: 'center' }}>
        <Button type='primary' htmlType='submit'>Отправить</Button>
      </div>
    </Form>
  )
}
