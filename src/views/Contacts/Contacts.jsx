import React from 'react'
import useForm from 'rc-form-hooks'
import MaskedInput from 'antd-mask-input'

import { useWindowDimension } from '../../hooks'
import { Row, Col, Form, Input } from 'antd'
import { Heading, Text, Container, Button } from '../../components'
import { ContactsContent } from './styled'

const { TextArea } = Input
export default function Contact ({ theme: { theme } }) {
  const { width } = useWindowDimension()
  const { getFieldDecorator, validateFields, values } = useForm()

  const handleSendMessage = e => {
    e.preventDefault()
    validateFields()
      .then(() => console.log(values))
  }

  return (
    <ContactsContent>
      <Heading brandText='Контакты' level={2} />

      <Text>Мы ответим на любой ваш вопрос</Text>
      <Container>
        <Form className='theme-form' onSubmit={handleSendMessage} hideRequiredMark>
          <Row gutter={[24, 24]}>
            <Col lg={12}>
              <Form.Item label='Название компании'>
                {getFieldDecorator('company', {
                  rules: [{ required: true, message: 'Введите название компании' }]
                })(
                  <Input size='large' placeholder='Название компании' />
                )}
              </Form.Item>

              <Form.Item label='Имя'>
                {getFieldDecorator('name', {
                  rules: [{ required: true, message: 'Введите ваше имя' }]
                })(
                  <Input size='large' placeholder='Ваше имя' />
                )}
              </Form.Item>

              <Form.Item label='Телефон'>
                {getFieldDecorator('phone', {
                  rules: [{ required: true, pattern: new RegExp('^[-+\\/\\s]*([0-9][-+\\/\\s]*){9,}$'), message: 'Введите номер телефона' }]
                })(
                  <MaskedInput addonBefore='+375' mask='11-111-11-11' size='large' placeholder='Номер телефона' />
                )}
              </Form.Item>

              <Form.Item label='Адрес электронной почты'>
                {getFieldDecorator('email', {
                  rules: [{ required: true, pattern: new RegExp('^[a-zA-Z0-9.!#$%&\'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$'), message: 'Введите ваше адрес электронной почты' }]
                })(
                  <Input size='large' placeholder='Ваше адрес электронной почты' />
                )}
              </Form.Item>
            </Col>

            <Col lg={12}>
              <Form.Item label='Сообщение'>
                {getFieldDecorator('message', {
                  rules: [{ required: true, message: 'Введите ваше сообщение' }]
                })(
                  <TextArea style={{ resize: 'none' }} rows={width < 991 ? 8 : 17} size='large' placeholder='Текст сообщения' />
                )}
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
