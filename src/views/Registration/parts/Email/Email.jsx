import React, { useContext, useState } from 'react'

import api from '../../../../services'
import { Checkbox, Form, Input, notification } from 'antd'
import { Button } from '../../../../components'
import { RegisterContext } from '../../context'
import { Link } from 'react-router-dom'

export default function () {
  const [isDisabled, setDisabled] = useState(true)
  const { dispatch } = useContext(RegisterContext)

  const handleEmailSend = values => {
    values.co_brand_id = 1
    api.auth.createUserByEmail(values)
      .then(({ data: { success, error } }) => {
        if (success) {
          notification.success({
            message: 'Завершите процесс регистрации, пройдя по ссылке в сообщении, которое мы выслали на почту.'
          })
          dispatch({ type: 'SAVE_FORM_DATA', payload: values })
          dispatch({ type: 'FINISH_REGISTER' })
        } else {
          throw new Error(error)
        }
      })
      .catch(error => {
        console.error(error.message)
        notification.error({
          message: error.message
        })
      })
  }
  return (
    <Form
      layout='vertical'
      className='theme-form'
      onFinish={handleEmailSend}
      hideRequiredMark
    >
      <Form.Item
        label='Введите адрес электронной почты '
        name='email'
        rules={[
          {
            required: true,
            message: 'Обязательное поле!'
          },
          {
            type: 'email',
            message: 'Неверный адрес электронной почты!'
          }
        ]}
      >
        <Input size='large' />
      </Form.Item>

      <Form.Item>
        <Checkbox onChange={() => setDisabled(!isDisabled)}> Я ознакомился и принимаю <span
          style={{ fontWeight: 500 }}
                                                                                      ><Link
          target='_blank' onClick={(event) => {
              event.preventDefault()
              window.open('/terms')
            }}
        >Правила пользования услугой.
          </Link>
        </span>
        </Checkbox>
      </Form.Item>

      <Form.Item>
        <Button
          type='primary'
          disabled={isDisabled}
          htmlType='submit'
        >
                    Продолжать
        </Button>
      </Form.Item>
    </Form>
  )
}
