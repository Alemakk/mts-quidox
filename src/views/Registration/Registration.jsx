import React, { useEffect, useReducer } from 'react'
import { useLocation } from 'react-router'
import logger from 'use-reducer-logger'

import { Phone } from './parts'
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
  }, [])

  const handleStartRegistration = () => {
    dispatch({ type: 'SWITCH_REGISTRATION_METHODS', payload: false })
    dispatch({ type: 'CHANGE_ACTIVE_STEP' })
  }

  const { isMethodsVisible, registrationType, activeStep } = state
  return (
    <RegistrationContent>
      <AboutServiceBanner />

      <RegistrationContent.Main>
        <Heading level={2}>Регистрация в МТС Quidox</Heading>
        <Text>Обмен электронными документами с ЭЦП</Text>

        <RegistrationContent.Content>
          <Steps size='small' current={activeStep}>
            {registrationSteps
              .find(i => i.type === registrationType)
              .steps
              .map(({ step }, idx) => <Step key={idx} title={step} />)}
          </Steps>

          <RegistrationContent.Types>
            <Text bolder style={{ textAlign: 'left' }}>Выберите способ регистрации</Text>

            {isMethodsVisible
              ? <>
                <Radio.Group style={{ marginTop: '3rem' }} defaultValue={registrationType}>
                  {registrationTypes.map(({ name, type, disabled }, idx) =>
                    <Radio style={radioStyle} key={idx} value={type} disabled={disabled}>{name}</Radio>)}
                </Radio.Group>

                <Button onClick={handleStartRegistration} style={{ display: 'block', marginTop: '3rem ' }} type='primary'>Продолжить</Button>
              </>
              : <RegisterContext.Provider value={{ state, dispatch }}>
                <RegistrationContent.FormWrapp>
                  {registrationType === 'phone' && <Phone />}
                </RegistrationContent.FormWrapp>
              </RegisterContext.Provider>}
          </RegistrationContent.Types>
        </RegistrationContent.Content>
      </RegistrationContent.Main>
    </RegistrationContent>
  )
}
