import React, { useContext } from 'react'

import { RegisterContext } from '../../context'
import { PhoneForm, CodeConfirm } from './parts'

export default function () {
  const { state } = useContext(RegisterContext)

  const { activeStep } = state
  return (
    <>
      {activeStep === 1 && <PhoneForm />}
      {activeStep === 2 && <CodeConfirm />}
    </>
  )
}
