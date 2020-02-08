import React, { useState } from 'react'
import useForm from 'rc-form-hooks'
import generateHash from 'random-hash'
import { Base64 } from 'js-base64'

import api from '../../../../services'
import { Form, Input, Checkbox } from 'antd'
import { Button, Alert } from '../../../../components'
import LoginFormContent from './styled'

export default function LoginForm () {
  const { getFieldDecorator, validateFields, values } = useForm()
  const [error, setError] = useState(null)

  const handleLogin = e => {
    e.preventDefault()
    validateFields()
      .then(() => {
        values.secret_key = process.env.REACT_APP_SECRET_KEY
        values.auth_data = generateHash({ length: 10 }) + Base64.encode(JSON.stringify(values)) + generateHash({ length: 5 })
        delete values.email
        delete values.password
        delete values.secret_key
        api.user.userLogin(values)
          .then(({ data }) => {
            if (data.success) {
              console.log(data.success)
            } else {
              throw new Error(data.error)
            }
          })
          .catch(error => setError(error.message))
      })
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

        {error &&
          <Alert>{error}</Alert>}

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
