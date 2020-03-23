import React, { useState, useEffect, useContext } from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'
import classNames from 'classnames'

import { RegisterContext } from '../../context'
import { icons } from '../../../../resources'
import { PlusOutlined, DownOutlined, UpOutlined } from '@ant-design/icons'
import { Form, Input, notification } from 'antd'
import { Text, Button } from '../../../../components'

import 'react-perfect-scrollbar/dist/css/styles.css'
import './Invite.scss'

const { SuccessIcon } = icons

export default function () {
  const [emails, setEmails] = useState([])
  const [isShowMore, setShowMore] = useState(false)
  const { state: { data: { email } } } = useContext(RegisterContext)

  const showMoreClass = classNames({
    invites__item: true,
    'invites__item--sep': true,
    'invites__item--open': isShowMore
  })

  useEffect(() => {
    if (emails.length <= 2) {
      setShowMore(false)
    }
  }, [emails])

  const handleSendInvites = () => {
    console.log(emails)
  }

  const handleSubmitInvite = values => {
    const { email } = values
    if (emails.includes(email)) {
      notification.error({
        message: 'Имейл уже добавлен!'
      })
      return
    }
    setEmails([...emails, values.email])
  }

  const handleRemoveInvite = mail => {
    setEmails(emails.filter(i => i !== mail))
  }

  return (
    <div className='invite'>
      <div className='invite__success'>
        <Text bolder>Регистрация завершена</Text>
        <SuccessIcon style={{ marginLeft: '1rem' }} />
      </div>

      <Text style={{ textAlign: 'left' }}>
        Подтвердите регистрацию, пройдя по ссылке в сообщении, которое мы выслали на почту&nbsp;
        <span style={{ fontWeight: 500, color: '#000' }}>{email}.</span>
      </Text>

      <Form
        style={{ marginTop: '3rem' }}
        layout='vertical'
        className='theme-form theme-form--invite'
        onFinish={handleSubmitInvite}
        hideRequiredMark
      >
        <Form.Item
          style={{ width: '100%' }}
          name='email'
          label='Пригласите друзей'
          rules={[
            {
              required: true,
              message: 'Обязательное поле!'
            },
            {
              type: 'email',
              message: 'Не валидный имейл!'
            }
          ]}
        >
          <Input size='large' />
        </Form.Item>

        <Form.Item
          style={{ margin: '0 0 2rem 3rem' }}
        >
          <Button type='primary' htmlType='submit'>Пригласить</Button>
        </Form.Item>
      </Form>

      <PerfectScrollbar>
        <ul className='invites__list invites'>
          {emails.slice(0, 2).map((i, idx) => (
            <div className='invites__item' key={idx}>
              {i}
              <PlusOutlined className='invites__item-icon' rotate={45} onClick={() => handleRemoveInvite(i)} />
            </div>
          ))}

          {emails.length > 2 &&
            <div className={showMoreClass} key='invites__item' onClick={() => setShowMore(!isShowMore)}>
              {emails.length - 2} more
              {isShowMore
                ? <UpOutlined className='invites__item-icon' />
                : <DownOutlined className='invites__item-icon' />}
            </div>}

          {isShowMore &&
            <>
              {emails.slice(2).map((i, idx) => (
                <div className='invites__item' key={idx}>
                  {i}
                  <PlusOutlined className='invites__item-icon' rotate={45} onClick={() => handleRemoveInvite(i)} />
                </div>
              ))}
            </>}
        </ul>
      </PerfectScrollbar>
      {!!emails.length &&
        <Button style={{ marginTop: '3rem' }} type='primary' onClick={handleSendInvites}>Выслать приглашения</Button>}
    </div>
  )
}
