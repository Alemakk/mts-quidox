import React, { useRef, useEffect } from 'react'
import MaskedInput from 'antd-mask-input'

import { Row, Col, Form, Input, notification } from 'antd'
import { Heading, Text, Container, Button } from '../../components'
import { ContactsContent } from './styled'

const { TextArea } = Input
export default function Contact ({ theme: { theme } }) {
  const colNode = useRef(null)

  useEffect(() => {
    console.log(colNode)
  }, [])

  const handleSendMessage = value => {
    notification.success({
      message: `Уважаемый ${value.name}`,
      description: 'В ближайшее время мы ознакомимся с вашим обращением'
    })
  }
  return (
    <ContactsContent>
      <Heading brandText='Контакты' level={2} />

      <Text>Мы ответим на любой ваш вопрос</Text>
      <Container small>
        <Form className='theme-form' layout='vertical' onFinish={handleSendMessage} style={{ marginTop: '3rem' }} hideRequiredMark>
          <Row gutter={[24, 24]}>
            <Col md={24} lg={12}>
              <Form.Item
                label='Название компании'
                name='company'
                rules={[{ required: true, message: 'Введите название компании' }]}
              >
                <Input size='large' placeholder='Название компании' />
              </Form.Item>
            </Col>

            <Col md={24} lg={12}>
              <Form.Item
                label='Имя'
                name='name'
                rules={[{ required: true, message: 'Введите ваше имя' }]}
              >
                <Input size='large' placeholder='Ваше имя' />
              </Form.Item>
            </Col>

            <Col md={24} lg={12}>
              <Form.Item
                name='phone'
                label='Номер мобильного телефона'
                rules={[{ required: true, message: 'Обязательное поле' }]}
              >
                <MaskedInput size='large' addonBefore='+375' mask='11-111-11-11' />
              </Form.Item>
            </Col>

            <Col md={24} lg={12}>
              <Form.Item
                label='Адрес электронной почты'
                name='email'
                rules={[{ required: true, pattern: new RegExp('^[a-zA-Z0-9.!#$%&\'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$'), message: 'Введите ваше адрес электронной почты' }]}
              >
                <Input size='large' placeholder='Ваше адрес электронной почты' />
              </Form.Item>
            </Col>

            <Col lg={24}>
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
      </Container>
    </ContactsContent>
  )
}
