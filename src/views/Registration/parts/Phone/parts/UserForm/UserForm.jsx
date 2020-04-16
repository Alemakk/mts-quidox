import React, { useContext } from 'react'

import api from '../../../../../../services'
import { RegisterContext } from '../../../../context'
import { Form, Input, notification } from 'antd'
import { Button } from '../../../../../../components'

export default function () {
  const [form] = Form.useForm()
  const { state: { data }, dispatch } = useContext(RegisterContext)

  const handleCreateUser = values => {
    delete values.confirm
    dispatch({ type: 'FETCHING_INIT', payload: true })

    const userData = { ...values, ...data }

    api.auth.createUser(userData)
      .then(({ data: { success, error } }) => {
        if (success) {
          notification.success({
            message: 'Поздравляем! Вы успешно зарегистрировались!'
          })
          dispatch({ type: 'FETCHING_INIT', payload: false })
          dispatch({ type: 'SAVE_FORM_DATA', payload: values })
          dispatch({ type: 'FINISH_REGISTER' })
        } else {
          throw new Error(error)
        }
      })
      .catch(error => {
        console.error(error.message)
        dispatch({ type: 'FETCHING_INIT', payload: false })
        notification.error({
          message: error.message
        })
      })
  }

  return (
    <Form
      form={form}
      className='theme-form'
      layout='vertical'
      onFinish={handleCreateUser}
      hideRequiredMark
    >
      <Form.Item
        label='Введите адрес электронной почты'
        name='email'
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
        label='Ваше имя'
        name='name'
        rules={[
          {
            required: true,
            message: 'Обязательное поле!'
          }
        ]}
      >
        <Input size='large' />
      </Form.Item>

      <Form.Item
        label='Придумайте пароль'
        name='password'
        rules={[
          {
            required: true,
            message: 'Обязательное поле! Минимум 8 символов',
            pattern: /^.{8,128}$/
          }
        ]}
        hasFeedback
      >
        <Input.Password size='large' />
      </Form.Item>

      <Form.Item
        label='Подтвердите пароль'
        name='confirm'
        dependencies={['password']}
        rules={[
          {
            required: true,
            message: 'Обязательное поле!'
          },
          ({ getFieldValue }) => ({
            validator (rule, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve()
              }
              // eslint-disable-next-line prefer-promise-reject-errors
              return Promise.reject('Пароль введён неверно')
            }
          })
        ]}
        hasFeedback
      >
        <Input.Password size='large' />
      </Form.Item>

      <Form.Item>
        <Button htmlType='submit' type='primary'>Продолжить</Button>
      </Form.Item>
    </Form>
  )
}
