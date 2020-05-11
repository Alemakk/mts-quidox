import React, { useEffect, useReducer } from 'react'
import { useLocation } from 'react-router'
import logger from 'use-reducer-logger'

import { handleLoginWithECP, handleLoginWithSimECP } from '../utils'
import { Phone, Email, Invite } from './parts'
import { Steps, Radio } from 'antd'
import { RegisterContext, reducer, initialState } from './context'
import { registrationSteps, registrationTypes } from './static'
import { Heading, Text, AboutServiceBanner } from '../../components'
import RegistrationContent from './styled'
import Button from '../../components/Button'

const { Step } = Steps

const radioStyle = {
  display: 'block',
  height: '30px',
  lineHeight: '30px'
}

export default function () {
  const [state, dispatch] = useReducer(logger(reducer), initialState)
  const { state: locationState } = useLocation()

  useEffect(() => {
    if (locationState) {
      const { type } = locationState
      dispatch({ type: 'CHANGE_REGISTRATION_TYPE', payload: type })
    }
  }, [locationState])

  const handleStartRegistration = () => {
    dispatch({ type: 'SWITCH_REGISTRATION_METHODS', payload: false })
    dispatch({ type: 'CHANGE_ACTIVE_STEP' })
  }

  const changeRegistrationType = e => {
    dispatch({ type: 'CHANGE_REGISTRATION_TYPE', payload: e.target.value })
  }

  const externalRegistration = (type) => {
    if (type === 'id') {
      handleLoginWithSimECP()
    } else {
      handleLoginWithECP()
    }
  }

  const { isMethodsVisible, registrationType, activeStep, isRegisterEnd } = state
  return (
    <RegistrationContent>
      <AboutServiceBanner />

      <RegistrationContent.Main>
        <Heading level={2}>Регистрация в МТС SmartDoc</Heading>
        <Text>Обмен электронными документами с ЭЦП</Text>
        <RegisterContext.Provider value={{ state, dispatch }}>
          {!isRegisterEnd
            ? <>
              <RegistrationContent.Content>
                <Steps size='small' current={activeStep}>
                  {registrationSteps
                    .find(i => i.type === registrationType)
                    .steps
                    .map(({ step }, idx) => <Step key={idx} title={step} />)}
                </Steps>

                <RegistrationContent.Types>
                  {isMethodsVisible
                    ? <>
                      <Text bolder style={{ textAlign: 'left' }}>Выберите способ регистрации</Text>
                      <Radio.Group style={{ marginTop: '3rem' }} value={registrationType} onChange={changeRegistrationType}>
                        {registrationTypes.map(({ name, type, disabled }, idx) =>
                          <Radio style={radioStyle} key={idx} value={type} disabled={disabled}>{name}</Radio>)}
                      </Radio.Group>

                      <Button onClick={() => ['phone', 'email'].includes(registrationType) ? handleStartRegistration() : externalRegistration(registrationType)} style={{ display: 'block', marginTop: '3rem ' }} type='primary'>Продолжить</Button>
                    </>
                    : <RegistrationContent.FormWrapp>
                      {registrationType === 'phone' && <Phone />}
                      {registrationType === 'email' && <Email />}
                    </RegistrationContent.FormWrapp>}
                </RegistrationContent.Types>
              </RegistrationContent.Content>
            </>
            : <RegistrationContent.Invite>
              <Invite />
            </RegistrationContent.Invite>}
        </RegisterContext.Provider>
      </RegistrationContent.Main>
    </RegistrationContent>
  )
}
