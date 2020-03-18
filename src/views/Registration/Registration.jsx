import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router'

import { Phone } from './parts'
import { Steps, Radio } from 'antd'
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
  const { state } = useLocation()
  const [isMethodsVisible, setMethodsVisible] = useState(true)
  const [registrationType, setRegistrationType] = useState('phone')

  useEffect(() => {
    if (state) {
      const { type } = state
      setRegistrationType(type)
    }
  }, [])
  return (
    <RegistrationContent>
      <AboutServiceBanner />

      <RegistrationContent.Main>
        <Heading level={2}>Регистрация в МТС Quidox</Heading>
        <Text>Обмен электронными документами с ЭЦП</Text>

        <RegistrationContent.Content>
          <Steps size='small' current={0}>
            {registrationSteps
              .find(i => i.type === registrationType)
              .steps
              .map(({ step }, idx) => <Step key={idx} title={step} />)}
          </Steps>

          <RegistrationContent.Types>
            <Text bolder style={{ textAlign: 'left' }}>Выберите способ регистрации</Text>

            {isMethodsVisible
              ? <Radio.Group style={{ marginTop: '3rem' }} defaultValue={registrationType}>
                {registrationTypes.map(({ name, type, disabled }, idx) =>
                  <Radio style={radioStyle} key={idx} value={type} disabled={disabled}>{name}</Radio>)}
              </Radio.Group>
              : <RegistrationContent.FormWrapp>
                {registrationType === 'phone' && <Phone />}
              </RegistrationContent.FormWrapp>}

            <Button onClick={() => setMethodsVisible(false)} style={{ display: 'block', marginTop: '3rem' }} type='primary'>Продолжить</Button>
          </RegistrationContent.Types>
        </RegistrationContent.Content>
      </RegistrationContent.Main>
    </RegistrationContent>
  )
}
