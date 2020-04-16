import React, { useContext } from 'react'

import { ServiceContext } from '../../context'
import { Text, Button } from '../../../../components'
import { servicePackages } from '../../static'

import './ServiceOverView.scss'

const serviceFunctions = ['есть доступ по API', 'срок действия пакета 30 дней',
  '4 пользователя компании', 'бесконечно количество внутренних отправлений', '1000 внешних отправлений',
  'бескнонечено количетсво входящий отправлений', '5 GB рабочего дискового пространства']

export default function () {
  const { state, dispatch } = useContext(ServiceContext)

  const { activeService } = state
  const activeServiceName = servicePackages.find(service => service.type === activeService).title
  return (
    <>
      <Text bolder>Функции тарифа «{activeServiceName}»</Text>
      <ul className='about-service-list'>
        {serviceFunctions.map((i, idx) => (
          <li className='about-service-item' key={idx}>{i}</li>
        ))}
      </ul>
      <Button style={{ display: 'block', margin: '3rem auto 0' }} onClick={() => dispatch({ type: 'INCREMENT_ACTIVE_STEP' })} type='primary'>Продолжить</Button>
    </>
  )
}