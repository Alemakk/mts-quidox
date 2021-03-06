import React, { useContext, useState } from 'react'
import MaskedInput from 'antd-mask-input'

import api from '../../../../services'
import { ServiceContext } from '../../context'
import { servicePackages } from '../../static'
import { Checkbox, Form, Input, notification, Select } from 'antd'
import { Button, Text } from '../../../../components'

export default function () {
  const [isFormDataAgree, setFormDataAgree] = useState(true)
  const { state: serviceState } = useContext(ServiceContext)
  const { activeService } = serviceState

  const handleSubscribe = values => {
    values.service = servicePackages.find(service => service.type === values.service).description
    api.mts.sendInvoice(values)
      .then(response => {
        const { data: { data, success, error } } = response
        if (success) {
          notification.success({
            message: 'Не забудьте подписать документ и отправить!'
          })
          // eslint-disable-next-line no-undef
          const sharedToken = `?shared_token=${btoa(process.env.REACT_APP_SECRET_KEY)}`
          window.open(data + sharedToken, '_blank')
        } else {
          throw new Error(error)
        }
      })
      .catch(error => {
        notification.error({
          message: error.message
        })
      })
  }
  return (
    <>
      <Form
        style={{ maxWidth: '55rem', margin: '0 auto', width: '100%' }}
        layout='vertical'
        className='theme-form'
        onFinish={handleSubscribe}
        hideRequiredMark
        initialValues={{
          type: 'Устава',
          phone: serviceState.phone.split('-').join(''),
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
          <Input size='large'/>
        </Form.Item>

        <Form.Item
          name='user'
          label='Должность и ФИО руководителя / доверенного лица (в лице...)'
          rules={[{ required: true, message: 'Обязательное поле!' }]}
        >
          <Input size='large'/>
        </Form.Item>

        <Form.Item
          name='type'
          label='Действующего на основании'
          rules={[{ required: true, message: 'Обязательное поле!' }]}
        >
          <Input size='large'/>
        </Form.Item>

        <Form.Item
          name='phone'
          label='Номер мобильного телефона'
          rules={[{ required: true, message: 'Обязательное поле' }]}
        >
          <MaskedInput disabled size='large' addonBefore='+375' mask='11-111-11-11'/>
        </Form.Item>

        <Form.Item
          name='service'
          label='Выбрать услугу'
          rules={[{ required: true, message: 'Обязательное поле' }]}
        >
          <Select size='large'>
            {servicePackages.map(({ description, type, title }, idx) => (
              <Select.Option key={idx} value={type}>{title}</Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          name='position'
          label='Должность доверенного лица'
          rules={[{ required: true, message: 'Обязательное поле!' }]}
        >
          <Input size='large'/>
        </Form.Item>

        <Form.Item
          name='passport_number'
          label='Номер паспорта доверенного лица'
          rules={[{ required: true, message: 'Обязательное поле!' }]}
        >
          <Input size='large'/>
        </Form.Item>

        <Form.Item
          name='authority'
          label='Орган, который выдал паспорт доверенному лицу'
          rules={[{ required: true, message: 'Обязательное поле!' }]}
        >
          <Input size='large'/>
        </Form.Item>

        <Form.Item
          name='passport_expire'
          label='Срок действия паспорта доверенного лица'
          rules={[{ required: true, message: 'Обязательное поле!' }]}
        >
          <Input size='large'/>
        </Form.Item>

        <Form.Item>
          <Checkbox onChange={() => setFormDataAgree(!isFormDataAgree)}>Все данные введены верно</Checkbox>
        </Form.Item>
        <Form.Item>
          <Text small><strong>Для добавления услуги необходимо сформировать документ, подписать, поставить печать и
            отправить скан-копию на электронный адрес corporate@mts.by</strong></Text>
        </Form.Item>

        <Form.Item>
          <Button type='primary' style={{ display: 'block', margin: '0 auto' }} disabled={isFormDataAgree}>Сформировать
            документ</Button>
        </Form.Item>

        <Form.Item>
          <Text small>*Вы также можете скачать пустой бланк заявления в формате pdf, заполнить и подписать его
            вручную.</Text>
        </Form.Item>
      </Form>
      <Button onClick={() => window.open(`${process.env.PUBLIC_URL}/corp_service.doc`, '_self')} type='secondary'
              style={{ display: 'block', margin: '0 auto' }} ghost>Скачать пустой бланк pdf</Button>
    </>
  )
}
