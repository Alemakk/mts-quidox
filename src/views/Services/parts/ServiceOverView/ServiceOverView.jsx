import React, { useContext } from 'react'

import { ServiceContext } from '../../context'
import { Text, Button } from '../../../../components'
import { servicePackages } from '../../static'

import './ServiceOverView.scss'

const services = [
  {
    name: 'easy',
    functions: ['НЕТ доступа по API', 'срок действия пакета до 30 дней',
      '2 пользователя компании', 'бесконечное количество внутренних отправлений', '100 внешних отправлений',
      'бесконечное количество входящий отправлений', '1 GB рабочего дискового пространства']
  },
  {
    name: 'standard',
    functions: ['ЕСТЬ доступ по API', 'срок действия пакета до 30 дней',
      '4 пользователя компании', 'бесконечное количество внутренних отправлений', '1000 внешних отправлений',
      'бесконечное количество входящий отправлений', '5 GB рабочего дискового пространства']
  },
  {
    name: 'business',
    functions: ['ЕСТЬ доступ по API', 'срок действия пакета до 30 дней',
      '10 пользователей компании', 'бесконечное количество внутренних отправлений', '5000 внешних отправлений',
      'бесконечное количество входящий отправлений', '5 GB рабочего дискового пространства']
  }
]

export default function () {
  const { state, dispatch } = useContext(ServiceContext)

  const { activeService } = state
  const activeServiceName = servicePackages.find(service => service.type === activeService).title
  return (
    <>
      <Text bolder>Функции тарифа «{activeServiceName}»</Text>
      <ul className='about-service-list'>
        {services.find(el => el.name === activeService).functions.map((i, idx) => (
          <li className='about-service-item' key={idx}>{i}</li>
        ))}
      </ul>
      <Button style={{ display: 'block', margin: '3rem auto 0' }} onClick={() => dispatch({ type: 'INCREMENT_ACTIVE_STEP' })} type='primary'>Продолжить</Button>
    </>
  )
}
