import React, { useEffect, useReducer } from 'react'
import logger from 'use-reducer-logger'
import { useLocation } from 'react-router'

import { Steps } from 'antd'
import { PhoneConfirm } from './parts'
import { reducer, initialState } from './context'
import { Container, Heading, Button } from '../../components'
import { ServicesContent } from './styled'

import { servicePackages, serviceOptions } from './static'
import './Services.scss'

const { Step } = Steps

const steps = ['Проверка абонента МТС', 'Обзор тарифа', 'Подать заявку']

export default function () {
  const { state: locationState } = useLocation()
  const [state, dispatch] = useReducer(logger(reducer), initialState)

  useEffect(() => {
    if (locationState) {
      const { type } = locationState
      dispatch({ type: 'CHANGE_ACTIVE_SERVICE', payload: type })
    }
  }, [locationState])

  const handleChooseService = type => {
    dispatch({ type: 'CHANGE_ACTIVE_SERVICE', payload: type })
  }
  const { activeService, activeStep } = state
  return (
    <ServicesContent style={{ backgroundColor: activeService ? '#F9F9F9' : '#fff' }}>
      <Container small={!!activeService}>
        <Heading brandText='Пакеты'>услуг</Heading>
        {activeService
          ? <>
          <Steps current={activeStep}>
            {steps.map((i, idx) => <Step key={idx} title={i} />)}
          </Steps>
          <div className='step-content'>
            {activeStep === 0 && <PhoneConfirm />}
          </div>
          </>
          : <div className='services'>
            <ul className='services__item list list--description'>
              <li className='list__item list__item--head list__item--transparent' />
              {serviceOptions.map((i, idx) => <li className='list__item' key={idx}>{i}</li>)}
              <Button style={{ marginLeft: '2rem' }} type='secondary' ghost>Подробднее</Button>
            </ul>
            {servicePackages.map((i, idx) => (
              <ul className={`services__item list ${i.top ? 'list--top' : ''}`} key={idx}>
                <li className='list__item list__item--head'>{i.title}</li>
                <li className='list__item'>{i.accessAPI && 'есть'}</li>
                <li className='list__item'>{i.timePeriod}</li>
                <li className='list__item'>{i.usersCount}</li>
                <li className='list__item'>{i.amountInner}</li>
                <li className='list__item'>{i.amountOut}</li>
                <li className='list__item'>{i.amountIn}</li>
                <li className='list__item'>{i.diskSpace}GB</li>
                <Button onClick={() => handleChooseService(i.type)} type='primary'>Подключить</Button>
              </ul>
            ))}
          </div>}
      </Container>
    </ServicesContent>
  )
}
