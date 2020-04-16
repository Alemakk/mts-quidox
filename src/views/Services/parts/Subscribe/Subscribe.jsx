import React, { useState, useContext } from 'react'
import MaskedInput from 'antd-mask-input'

import ApplicationContext from '../../../../ApplicationContext'
import { ServiceContext } from '../../context'
import { servicePackages } from '../../static'
import { Form, Input, Select, Checkbox } from 'antd'
import { Text, Button } from '../../../../components'

export default function () {
  const [isFormDataAgree, setFormDataAgree] = useState(true)
  const { state: serviceState } = useContext(ServiceContext)
  const { state } = useContext(ApplicationContext)
  const handleSubscribe = values => {
    console.log(values)
  }
  const { user } = state
  const { activeService } = serviceState
  console.log(user)
  return (
    <Form
      style={{ maxWidth: '55rem', margin: '0 auto', width: '100%' }}
      layout='vertical'
      className='theme-form'
      onFinish={handleSubscribe}
      hideRequiredMark
      initialValues={{
        company: user.companies[0].company_name || '',
        user: `${user.lastname ? user.lastname : ''} ${user.name ? user.name : ''} ${user.patronymic ? user.patronymic : ''}`,
        type: 'Устава',
        phone: user.phone.split('').slice(4).join(''),
        service: activeService
      }}
    >
      <Form.Item>
        <Text bolder>Заявление</Text>
      </Form.Item>

      <Form.Item
        name='company'
        label='Наименование организации или ФИО абонента (от...)'
        rules={[{ required: true, message: 'Обязательное поле!' }]}
      >
        <Input size='large' />
      </Form.Item>

      <Form.Item
        name='user'
        label='Должность и ФИО руководителя / доверенного лица (в лице...)'
        rules={[{ required: true, message: 'Обязательное поле!' }]}
      >
        <Input size='large' />
      </Form.Item>

      <Form.Item
        name='type'
        label='Действующего на основании'
        rules={[{ required: true, message: 'Обязательное поле!' }]}
      >
        <Input size='large' />
      </Form.Item>

      <Form.Item
        name='phone'
        label='Введите номер мобильного телефона'
        rules={[{ required: true, message: 'Обязательное поле' }]}
      >
        <MaskedInput size='large' addonBefore='+375' mask='11-111-11-11' />
      </Form.Item>

      <Form.Item
        name='service'
        label='Выбрать услугу'
        rules={[{ required: true, message: 'Обязательное поле' }]}
      >
        <Select size='large'>
          {servicePackages.map(({ type, title }, idx) => (
            <Select.Option key={idx} value={type}>{title}</Select.Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item
        name='position'
        label='Должность доверенного лица'
        rules={[{ required: true, message: 'Обязательное поле!' }]}
      >
        <Input size='large' />
      </Form.Item>

      <Form.Item
        name='passport_number'
        label='Номер паспорта доверенного лица'
        rules={[{ required: true, message: 'Обязательное поле!' }]}
      >
        <Input size='large' />
      </Form.Item>

      <Form.Item
        name='authority'
        label='Орган, который выдал паспорт доверенному лицу'
        rules={[{ required: true, message: 'Обязательное поле!' }]}
      >
        <Input size='large' />
      </Form.Item>

      <Form.Item
        name='passport_expire'
        label='Срок действия паспорта доверенного лица'
        rules={[{ required: true, message: 'Обязательное поле!' }]}
      >
        <Input size='large' />
      </Form.Item>

      <Form.Item>
        <Checkbox onChange={() => setFormDataAgree(!isFormDataAgree)}>Все данные введены верно</Checkbox>
      </Form.Item>

      <Form.Item>
        <Button type='primary' style={{ display: 'block', margin: '0 auto' }} disabled={isFormDataAgree}>Сформировать документ</Button>
      </Form.Item>

      <Form.Item>
        <Text small>*Вы также можете скачать пустой бланк заявления в формате pdf, заполнить и подписать его вручную.</Text>
      </Form.Item>

      <Form.Item>
        <Button type='secondary' style={{ display: 'block', margin: '0 auto' }} ghost>Скачать пустой бланк pdf</Button>
      </Form.Item>
    </Form>
  )
}