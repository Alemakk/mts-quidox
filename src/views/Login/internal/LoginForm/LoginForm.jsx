import React from 'react'
import useForm from 'rc-form-hooks'

import { Form, Input, Checkbox } from 'antd'
import { Button, Text } from '../../../../components'
import LoginFormContent from './styled'

export default function LoginForm () {
  const { getFieldDecorator, validateFields, values } = useForm()

  const handleLogin = e => {
    e.preventDefault()
    validateFields()
      .then(() => console.log(values))
  }
  return (
    <LoginFormContent>
      <Form onSubmit={handleLogin} className='theme-form' hideRequiredMark>
        <Form.Item label='Введите адрес электронной почты'>
          {getFieldDecorator('email', {
            rules: [{ required: true, pattern: new RegExp('^[a-zA-Z0-9.!#$%&\'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$'), message: 'Введите адрес электронной почты' }]
          })(
            <Input size='large' placeholder='Введите адрес электронной почты' />
          )}
        </Form.Item>

        <Form.Item label='Введите пароль'>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Введите пароль' }]
          })(
            <Input size='large' type='password' placeholder='Введите пароль' />
          )}
        </Form.Item>

        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true
          })(<Checkbox>Запомнить меня</Checkbox>)}
          <a className='form-link' href='#'>Забыли пароль?</a>
        </Form.Item>

        <Button type='primary' htmlType='submit'>Войти</Button>
      </Form>
    </LoginFormContent>
  )
}
