import React, { useContext } from 'react'
import { useHistory } from 'react-router'
import generateHash from 'random-hash'
import { Base64 } from 'js-base64'

import api from '../../../../services'
import FormContext from '../../context'
import { handleLoginWithSimECP, handleLoginWithECP, handleRegister, handleResetPassword } from '../../../utils'
import { Form, Input, Checkbox } from 'antd'
import { Button, Alert, Text } from '../../../../components'
import LoginFormContent from './styled'
import { Link } from 'react-router-dom'

export default function () {
  const history = useHistory()
  const { state, dispatch } = useContext(FormContext)

  const handleLogin = values => {
    dispatch({ type: 'LOGIN_INIT', payload: true })
    values.secret_key = process.env.REACT_APP_SECRET_KEY
    values.auth_data = generateHash({ length: 10 }) + Base64.encode(JSON.stringify(values)) + generateHash({ length: 5 })
    delete values.email
    delete values.password
    delete values.secret_key
    api.user.userLogin(values)
      .then(response => {
        const { data: { data, success, error } } = response

        if (success && data) {
          dispatch({ type: 'LOGIN_INIT', payload: false })
          window.localStorage.setItem('authToken', data.token)
          window.open(`${process.env.REACT_APP_QUIDOX_URL}/login?token=${data.token}`, '_self')
        } else {
          throw new Error(error)
        }
      })
      .catch(error => {
        dispatch({ type: 'LOGIN_ERROR', payload: error.message })
      })
  }

  const { isFetching, error } = state
  return (
    <LoginFormContent>
      <Form
        onFinish={handleLogin}
        initialValues={{ remember: true }}
        className='theme-form'
        layout='vertical'
        hideRequiredMark
      >
        <Form.Item
          name='email'
          label='Введите Email или номер телефона: +375...'
          rules={[
            {
              required: true,
              message: 'Обязательное поле!'
            }
          ]}
        >
          <Input size='large'/>
        </Form.Item>

        <Form.Item
          name='password'
          label='Введите пароль'
          rules={[
            {
              required: true,
              message: 'Обязательное поле!'
            }
          ]}
        >
          <Input.Password size='large'/>
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
        <Button
          onClick={handleResetPassword}
          style={{ marginTop: 30, marginBottom: 30 }}
          type='secondary'
          ghost
        >
          Забыли пароль?
        </Button>
      </Form>

      <div style={{ marginBottom: '2rem' }}>
        <Button style={{ fontSize: '1.4rem', }} onClick={handleLoginWithECP} type='primary'>
          Войти по ЭЦП
        </Button>

        <Button onClick={handleLoginWithSimECP} style={{ fontSize: '1.4rem', marginLeft: '1rem' }} type='primary'>
          Войти по MTC ID
        </Button>
      </div>

      <Text style={{ color: '#000', textAlign: 'left' }}>Еще нет учетной записи?</Text>
      <Button
        onClick={() => history.push('/registration')}
        disabled={isFetching}
        loading={isFetching}
        style={{ marginTop: 30 }}
        type='secondary'
        ghost
      >
        Зарегистрироваться
      </Button>
    </LoginFormContent>
  )
}
