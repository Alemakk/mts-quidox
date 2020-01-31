import React from 'react'
import { useLocation } from 'react-router'

import { Heading } from '../../components'
export default function Registration () {
  const { state } = useLocation()

  const { type } = state
  return (
    <div>
      <Heading level={2}>Тип регистрации {type}</Heading>
    </div>
  )
}
