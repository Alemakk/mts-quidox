import React, { useEffect, useReducer, useContext } from 'react'
import logger from 'use-reducer-logger'
import { useLocation } from 'react-router'

import ApplicationContext from '../../ApplicationContext'
import { Steps, notification } from 'antd'
import { PhoneConfirm, ServiceOverView, Subscribe } from './parts'
import { reducer, initialState, ServiceContext } from './context'
import { Container, Heading, Button } from '../../components'
import { ServicesContent } from './styled'

import { servicePackages, serviceOptions } from './static'
import './Services.scss'
import history from "../../history";
import {Package} from "../Home/parts/ServicePackage/styled";

const { Step } = Steps

const steps = ['Проверка абонента МТС', 'Обзор тарифа', 'Подать заявку']

export default function () {
  const { state: { user } } = useContext(ApplicationContext)
  const { state: locationState } = useLocation()
  const [state, dispatch] = useReducer(logger(reducer), initialState)

  useEffect(() => {
    if (locationState) {
      const { type } = locationState
      dispatch({ type: 'CHANGE_ACTIVE_SERVICE', payload: type })
    }
  }, [locationState])

  const handleChooseService = type => {
    const isUserAuthorized = !!Object.keys(user).length
    if (!isUserAuthorized) {
      notification.error({
        message: 'Необходимо авторизоваться!'
      })
      return null
    }
    dispatch({ type: 'CHANGE_ACTIVE_SERVICE', payload: type })
  }
  const { activeService, activeStep } = state
  console.log(activeService)
  return (
    <ServiceContext.Provider value={{ state, dispatch }}>
      <ServicesContent style={{ backgroundColor: activeService ? '#F9F9F9' : '#fff' }}>
        <Container>
          <Heading brandPosition='right' brandText='MTC SmartDoc'>Услуги</Heading>
          {activeService
            ? <>
              <Steps style={{ maxWidth: '75rem', margin: '0 auto' }} current={activeStep}>
                {steps.map((i, idx) => <Step key={idx} title={i} />)}
              </Steps>
              <div className='step-content'>
                {activeStep === 0 && <PhoneConfirm />}
                {activeStep === 1 && <ServiceOverView />}
                {activeStep === 2 && <Subscribe />}
              </div>
            </>
            : <div className='services'>
              <ul className='services__item list list--description'>
                <li className='list__item list__item--head list__item--transparent' />
                {serviceOptions.map((i, idx) => <li className='list__item' key={idx}>{i}</li>)}
              </ul>
              {servicePackages.map((i, idx) => (
                <ul className={`services__item list ${i.top ? 'list--top' : ''}`} key={idx}>
                  <li className='list__item list__item--head'>{i.title}</li>
                  <li className='list__item'>{i.accessAPI ? 'есть' : 'нет'}</li>
                  <li className='list__item'>до {i.timePeriod} дней</li>
                  <li className='list__item'>{i.usersCount}</li>
                  <li className='list__item'>{i.amountInner}</li>
                  <li className='list__item'>{i.amountOut}</li>
                  <li className='list__item'>{i.amountIn}</li>
                  <li className='list__item'>{i.diskSpace} ГБ</li>
                  <li className='list__item'>{i.price} BYN</li>
                  <Button onClick={() => history.push({ pathname: '/services', state: { type: i.type } })} type='primary'>Подключить</Button>
                </ul>
              ))}
            </div>}
        </Container>
      </ServicesContent>
    </ServiceContext.Provider>
  )
}
