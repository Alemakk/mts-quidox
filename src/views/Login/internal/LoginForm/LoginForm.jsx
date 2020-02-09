import React, { useState, useContext } from 'react'
import useForm from 'rc-form-hooks'
import generateHash from 'random-hash'
import { Base64 } from 'js-base64'

import api from '../../../../services'
import FormContext from '../../context'
import { Form, Input, Checkbox, Icon } from 'antd'
import { Button, Alert, Text } from '../../../../components'
import LoginFormContent from './styled'
import { LoginContent } from '../../styled'

export default function LoginForm () {
  const { getFieldDecorator, validateFields, values } = useForm()
  const { state, dispatch } = useContext(FormContext)

  const handleLogin = e => {
    e.preventDefault()
    validateFields()
      .then(() => {
        dispatch({ type: 'FETCH_DATA', payload: true })
        values.secret_key = process.env.REACT_APP_SECRET_KEY
        values.auth_data = generateHash({ length: 10 }) + Base64.encode(JSON.stringify(values)) + generateHash({ length: 5 })
        delete values.email
        delete values.password
        delete values.secret_key
        api.user.userLogin(values)
          .then(({ data }) => {
            if (data.success) {
              console.log(data.success)
              dispatch({ type: 'FETCH_DATA', payload: false })
            } else {
              throw new Error(data.error)
            }
          })
          .catch(error => {
            dispatch({ type: 'ERROR', payload: error.message })
          })
      })
  }
  const { isFetching, error } = state
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
          <a className='form-link' onClick={() => dispatch({ type: 'CHANGE_FORM' })} href='#'>Забыли пароль?</a>
        </Form.Item>

        <Button type='primary' htmlType='submit'>
          {isFetching
            ? <Icon type='loading' />
            : 'Войти'}
        </Button>
      </Form>

      <Text style={{ color: '#000', textAlign: 'left' }}>Нет аккаунта?</Text>
      <Button style={{ marginTop: 30 }} type='secondary' ghost>Зарегестрироваться</Button>
    </LoginFormContent>
  )
}
