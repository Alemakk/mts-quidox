import React, { useContext } from 'react'
import generateHash from 'random-hash'
import { Base64 } from 'js-base64'

import api from '../../../../services'
import formItems from './static'
import FormContext from '../../context'
import { Form, Input, Checkbox, Icon } from 'antd'
import { Button, Alert, Text } from '../../../../components'
import LoginFormContent from './styled'

export default function LoginForm () {
  const [form] = Form.useForm()
  const { state, dispatch } = useContext(FormContext)

  const handleLogin = values => {
    dispatch({ type: 'FETCH_DATA', payload: true })
    values.secret_key = process.env.REACT_APP_SECRET_KEY
    console.log(values)
    values.authData = generateHash({ length: 10 }) + Base64.encode(JSON.stringify(values)) + generateHash({ length: 5 })
    const { authData } = values
    api.user.userLogin(authData)
      .then(({ data }) => {
        if (data.success) {
          dispatch({ type: 'FETCH_DATA', payload: false })
        } else {
          throw new Error(data.error)
        }
      })
      .catch(error => {
        dispatch({ type: 'ERROR', payload: error.message })
      })
  }

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };
  const { isFetching, error } = state
  return (
    <LoginFormContent>
      <Form
        form={form}
        onFinish={handleLogin}
        onFinishFailed={onFinishFailed}
        initialValues={{ remember: true }}
        className='theme-form'
        layout='vertical'
        hideRequiredMark
      >
        <Form.Item
          name='email'
          label='E-mail'
          rules={[
            {
              type: 'email',
              message: 'Не валидный имейл'
            },
            {
              required: true,
              message: 'Обязательное поле!'
            }
          ]}
        >
          <Input size='large' />
        </Form.Item>

        <Form.Item
          name='password'
          label='Password'
          rules={[
            {
              required: true,
              message: 'Обязательное поле!'
            }
          ]}
        >
          <Input.Password size='large' />
        </Form.Item>

        {error &&
          <Form.Item>
            <Alert>{error}</Alert>
          </Form.Item>}

        <Form.Item name='remember' valuePropName='checked'>
          <Checkbox>Запомнить меня</Checkbox>
        </Form.Item>

        <Form.Item>
          <Button type='primary' htmlType='submit'>
            Войти
          </Button>
        </Form.Item>
      </Form>

      <Text style={{ color: '#000', textAlign: 'left' }}>Нет аккаунта?</Text>
      <Button style={{ marginTop: 30 }} type='secondary' ghost>Зарегестрироваться</Button>
    </LoginFormContent>
  )
}
